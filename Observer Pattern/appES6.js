class EventObserver
{
  constructor(){
    this.observers = [];
  }

  subscribe(fn)
  {
    if((this.observers.find((item) => {return (item === fn);})) === undefined)
    {
      this.observers.push(fn);
      console.log(`You are now subscribed to ${fn.name}`);
    }
    else{
      console.log(`You are already subscribed to ${fn.name}`);
    }
    
  }

  unsubscribe(fn){

    if(this.observers.find((item) => {return (item === fn);}) === undefined)
      console.log(`You are already UnSubscribed from ${fn.name}`)
    else{
      this.observers = this.observers.filter(item => {
        return (item !== fn);
      });
      console.log(`You are now Unsubscribed from ${fn.name}`);
    }
  }

  fire(){
    this.observers.forEach(item => {
      item.call();
    });
  }
}

const getCurMilliSeconds = function(){
  console.log(`Current Milliseconds :${(new Date()).getMilliseconds()}`);
}

function getCurSeconds(){
  console.log(`Current Seconds :${(new Date()).getSeconds()}`);
}


const click = new EventObserver();
document.querySelector('.sub-ms').addEventListener('click',() => {
  click.subscribe(getCurMilliSeconds);});
document.querySelector('.unsub-ms').addEventListener('click',() => {
click.unsubscribe(getCurMilliSeconds);});

document.querySelector('.sub-s').addEventListener('click',() => {
  click.subscribe(getCurSeconds);});
document.querySelector('.unsub-s').addEventListener('click',() => {
click.unsubscribe(getCurSeconds);});

document.querySelector('.fire').addEventListener('click',() => {
  click.fire();});






