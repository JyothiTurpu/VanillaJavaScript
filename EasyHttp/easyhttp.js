function EasyHTTP(){
  this.http = new XMLHttpRequest();
}


EasyHTTP.prototype.get = function(url,callback)
{
  this.http.open('GET',url,true);
  this.http.onload = function()
  {
    if(this.status === 200)
    {
      callback(null,this.responseText);
    }
    else
    {
      callback('Error '+this.status);
    }
  }
  this.http.send();
}



EasyHTTP.prototype.post = function(url,data,callback)
{
  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-Type','application/json');
  this.http.onload = function()
  {
    callback(null,this.responseText);
  }
  this.http.send(JSON.stringify(data));
}


EasyHTTP.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-Type','application/json');
  this.http.onload = function()
  {
    callback(null,this.responseText);
  }
  this.http.send(JSON.stringify(data));
}

EasyHTTP.prototype.delete = function(url,callback){
  this.http.open('DELETE',url,true);
  this.http.onload = function()
  {
    if(this.status === 200)
    {
      callback(null,'Post Deleted');
    }
    else
    {
      callback('Error '+this.status);
    }
  }
  this.http.send();
}

