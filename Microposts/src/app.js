import { http } from './http';
import { ui } from "./ui";

const URL = 'http://localhost:3000/posts';

document.addEventListener('DOMContentLoaded',getPosts);
document.querySelector('.post-submit').addEventListener('click',addPostSubmit);
document.querySelector('#posts').addEventListener('click',deletePost);
document.querySelector('#posts').addEventListener('click',editPost);
document.querySelector('.card-form').addEventListener('click',cancelEdit);


function getPosts()
{
  http.get(URL).then(data => ui.showPosts(data)).catch(err => console.log(err));
}

function addPostSubmit(e)
{
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const id = document.getElementById('id').value;

  const data = 
  {
    "title": title,
    "body": body
  }

  if(title !== ''  && body !== '')
  {
    if(id === '')
      http.post(URL,data).then(resp => ui.showNewPost(resp)).catch(err => console.log(err));
    else
      http.put(`${URL}/${id}`,data).then(resp => ui.displayEditedPost(resp)).catch(err => console.log(err));
  }
  else
    ui.showAlert('alert alert-danger','Please fill in all details');

  
  e.preventDefault();
}

function deletePost(e)
{
  if(e.target.classList.contains('fa-remove'))
  {
    let element = e.target.parentNode;
    let id = element.getAttribute("data-id");
    if(confirm('Are you sure?'))
      http.delete(URL+'/'+id).then(resp => ui.removePost(element.parentNode.parentNode,resp)).catch(err => console.log(err));
  }
  e.preventDefault();
}

function editPost(e)
{
  if(e.target.classList.contains('fa-pencil'))
  {
    let element = e.target.parentNode;
    let id = element.getAttribute("data-id");
    let title = element.previousElementSibling.previousElementSibling.textContent;
    let body = element.previousElementSibling.textContent;

    ui.displayPostInfo(id,title,body);
  }
  e.preventDefault();
}

function cancelEdit(e)
{
  if(e.target.classList.contains('post-cancel'))
  {
    ui.restoreInitialState();
  }
  e.preventDefault();
}
