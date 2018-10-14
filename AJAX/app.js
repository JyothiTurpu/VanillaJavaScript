document.getElementById('button').addEventListener('click',loadData);

function loadData()
{
  const xhr = new XMLHttpRequest();
  xhr.open('GET','data.txt',true);
  
  xhr.onprogress = function()
  {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function()
  {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200)
    {
      console.log(this.responseText);
      document.querySelector('.output').innerHTML = `<h1> ${this.responseText} </h1>`;
    }
  }

  // xhr.onreadystatechange = function()
  // {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4)
  //   {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function()
  {
    console.log('Request Error ....');
  }


  xhr.send();
}