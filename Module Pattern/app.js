// Module Pattern
const UICtrl = (function() {
  // let heading = "Hello Varun!";

  const changeHeading = function(heading){
      document.querySelector('h1').textContent = heading;
  }

  return {
    callFunction: function(){
      changeHeading('Hello Varun Saravana');
    }
  }
})();

UICtrl.callFunction();


// Revealing Module Pattern
const itemCtrl = (function(){
  let data = [];
  
  const add = function(item){
    data.push(item);
    console.log('Item Added');
  }

  function get(id){
      let item = data.find((item) => {
        if(id === item.id)
          return item;
      });
      return item;
  }

  return {
    add: add,
    get: get
  };
})();


itemCtrl.add({name: 'Jyothi',id: 37});
itemCtrl.add({name: 'Varun',id: 38});
itemCtrl.add({name: 'Saravan',id: 39});
itemCtrl.add({name: 'John',id: 40});
console.log(itemCtrl.get(40));