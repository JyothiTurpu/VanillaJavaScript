document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e)
{
  const input = document.querySelector('#number').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${input}`,true);
  xhr.onload = function()
  {
    if(this.status === 200)
    {
      const response = JSON.parse(this.responseText);
      let output = '';
      if(response.type === 'success')
      {
        response.value.forEach(function(res){
          output +=  `<li>${res.joke}</li>`;
        });
      }
      else
      { 
        output += `<li>Something went wrong</li>`
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  e.preventDefault();
}