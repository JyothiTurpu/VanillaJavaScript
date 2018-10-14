document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getAPIData);

function getText()
{
  fetch('test.txt').
  then(res => res.text()).
  then(data => document.querySelector('#output').innerHTML = data).
  catch(err => console.log(err));
}

function getJSON()
{
  fetch('posts.json').
  then(res => res.json()).
  then(data => {
    let output = '';
    data.forEach(function(d){
      output += `<li>${d.Title}</li>`;
    });
    document.querySelector("#output").innerHTML = output;
  }).
  catch(err => console.log(err));
}

function getAPIData()
{
  fetch('https://api.github.com/users').
  then(res => res.json()).
  then(data => {
    let output = '';
    data.forEach(function(d){
        output += `<li>${d.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  }).
  catch(err => console.log(err));
}