const data1 = {title:'Custom Post1',body:'This is a Custom Post One'};
const data2 = {title:'Custom Post2',body:'This is a Custom Post Two'};
const http = new EasyHTTP();
function callback(error,response)
{
  if(error) 
    console.log(error);
  else   
    console.log(response);
}


http.get('https://jsonplaceholder.typicode.com/posts',callback);
http.post('https://jsonplaceholder.typicode.com/posts',data1,callback);
http.put('https://jsonplaceholder.typicode.com/posts/5',data2,callback);
http.delete('https://jsonplaceholder.typicode.com/posts/1',callback);