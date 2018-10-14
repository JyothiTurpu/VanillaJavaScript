//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event listeners
loadEventListeners();

function loadEventListeners()
{
  document.addEventListener('DOMContentLoaded',getTasks);
  form.addEventListener('submit',addTask);
  taskList.addEventListener('click',removeTask);
  clearBtn.addEventListener('click',clearTasks);
  filter.addEventListener('keyup',filterTasks);
}

function getTasks()
{
  let tasks;

  if(localStorage.getItem('taskList') == null)
    tasks = [];
  else
    tasks = JSON.parse(localStorage.getItem('taskList'));

  tasks.forEach(function(task){
    const li = document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
  })
}


function addTask(e){
  
  if(taskInput.value === '')
    alert("Add a task");
  else{
    const li = document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
    
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = '';

  }
  e.preventDefault();
}


function removeTask(e)
{
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?'))
    {
      
        let tasks = JSON.parse(localStorage.getItem('taskList'));
        let i = tasks.indexOf(e.target.parentElement.parentElement.firstChild.textContent);
        tasks.splice(i,1);
        localStorage.setItem("taskList",JSON.stringify(tasks));
        e.target.parentElement.parentElement.remove();
       
    }
    
  }
  
}


function clearTasks(e)
{
  while(taskList.firstChild)
  {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.removeItem("taskList");
}

function filterTasks(e)
{
 const text =  e.target.value.toLowerCase();
 
 document.querySelectorAll('.collection-item').forEach(function(task){  
      let toMatch = task.firstChild.textContent.toLowerCase();

      if(toMatch.indexOf((text)) != -1)
        task.style.display='block';
      else
        task.style.display='none';
 })

}


function storeTaskInLocalStorage(task)
{
  let tasks;

  if(localStorage.getItem('taskList') == null)
    tasks = [];
  else
    tasks = JSON.parse(localStorage.getItem('taskList'));

  tasks.push(task);

  localStorage.setItem('taskList',JSON.stringify(tasks));

  
}