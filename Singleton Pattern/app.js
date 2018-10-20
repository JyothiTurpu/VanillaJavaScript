const singleton = (function(){
  let instance;

  const createInstance = function(){
    if(instance === undefined){
      instance = new Object('Object created');
      console.log(instance);
      return instance;
    }
    else{
      console.log('Instance already created');
    }
      
    }


  return {
    getInstance: function(){
      createInstance();
    }
  };
})();


singleton.getInstance();
singleton.getInstance();

