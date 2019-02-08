//Storage Controller
const StrCtrl = (function(){

  return{
    persistStrItem: function(itemToBeAdded){
      let items;
      
      if(localStorage.getItem('ITEMS') === null)
        items = [];
      else
        items = JSON.parse(localStorage.getItem('ITEMS'));

      items.push(itemToBeAdded);
      localStorage.setItem('ITEMS',JSON.stringify(items));

    },

    updateStrItem: function(itemToBeUpdated){
      let items = JSON.parse(localStorage.getItem('ITEMS'));
      let tempItem = items.find(item => item.id === itemToBeUpdated.id);
      tempItem.name = itemToBeUpdated.name;
      tempItem.calories = itemToBeUpdated.calories;

      localStorage.setItem('ITEMS',JSON.stringify(items));
    },

    removeStrItem: function(itemIDToBeDeleted){
      let items = JSON.parse(localStorage.getItem('ITEMS'));
      items = items.filter((item) => {
        if(item.id !== itemIDToBeDeleted)
          return item;
      });

      localStorage.setItem('ITEMS',JSON.stringify(items));

    },


    retrieveStrItems: function(){
      let items = localStorage.getItem('ITEMS');
      if(items === null)
      {
        return [];
      }
      else
        return JSON.parse(items);
    },

    deleteStr: function()
    {
      localStorage.removeItem('ITEMS');
    }
  }

})();

//Item Controller
const ItemCtrl = (function(){

  const Item = function(id,name,calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const data = {
    items: [
      // {id : 0 ,name : "Steak Dinner", calories : 1200},
      // {id : 1 ,name : "Cookie", calories : 400},
      // {id : 2 ,name : "Eggs", calories : 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    getItems: function(){
      data.items = StrCtrl.retrieveStrItems();
      return data.items;
    },

    logData: function(){
      return data;
    },

    addItem: function(name,calories){
      let newId = 0;
      if(data.items.length > 0) {
        newId = data.items[data.items.length - 1].id + 1;
      }else{
        newId = 0;
      }
      let newItem = new Item(newId,name,parseInt(calories));
      data.items.push(newItem);

      data.totalCalories += parseInt(calories);
      return newItem;
    },

    updateItem: function(name,calories){
      data.totalCalories = data.totalCalories - data.currentItem.calories + calories;
      data.currentItem.name = name;
      data.currentItem.calories = calories;
      return data.currentItem;
    },

    deleteItem: function(){
      data.items = data.items.filter((item) => {
        if(item.id !== data.currentItem.id)
          return item;
      });
      
      data.totalCalories -= data.currentItem.calories;
      let deletedItemId = data.currentItem.id;
      data.currentItem = null;
      return deletedItemId;
    },

    deleteData: function(){
      data.items = [];
      data.currentItem = null;
      data.totalCalories = 0;
    },

    setTotalCalories: function(totalCalories){
      data.totalCalories = totalCalories;
    },

    getTotalCalories: function(){
      return data.totalCalories;
    },

    getItemByID: function(searchId){
      data.currentItem = data.items.find(item => item.id === searchId);
    },

    getCurrentItem: function(){
      return data.currentItem;
    }
  }
})();


//UI Controller
const UICtrl = (function(){

  const UISelectors = {
    itemList: '#item-list',
    itemName: '#item-name',
    itemCalories: '#item-calories',
    totalCalories: '.total-calories',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn'
  }

  return{
    populateItemList: function(items){
      let html = '';
      let totalCal = 0;
      items.forEach(item => {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="fa fa-pencil edit-item"></i></a>
      </li>`;
      totalCal += parseInt(item.calories);
      });
      
      document.querySelector(UISelectors.itemList).innerHTML = html;
      document.querySelector(UISelectors.totalCalories).textContent = totalCal;
      ItemCtrl.setTotalCalories(totalCal);
    },

    getSelectors: function(){
      return UISelectors;
    },

    getItemInput: function(){
      return{
        name : document.querySelector(UISelectors.itemName).value,
        calories : document.querySelector(UISelectors.itemCalories).value
      }
    },

    addListItem: function(newItem){
      this.showList();
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${newItem.id}`;
      li.innerHTML = `<strong>${newItem.name}: </strong> <em>${newItem.calories} Calories</em>
      <a href="#" class="secondary-content"><i class="fa fa-pencil edit-item"></i></a>`;

      document.querySelector(UISelectors.itemList).appendChild(li);
      document.querySelector(UISelectors.totalCalories).textContent = ItemCtrl.getTotalCalories();
    },

    updateListItem: function(updatedItem){
      document.getElementById(`item-${updatedItem.id}`).innerHTML = `<strong>${updatedItem.name}: </strong> <em>${updatedItem.calories} Calories</em>
      <a href="#" class="secondary-content"><i class="fa fa-pencil edit-item"></i></a>`;

      document.querySelector(UISelectors.totalCalories).textContent = ItemCtrl.getTotalCalories();
      },

    deleteListItem: function(deletedItemID){
      document.getElementById(`item-${deletedItemID}`).remove();
      document.querySelector(UISelectors.totalCalories).textContent = ItemCtrl.getTotalCalories();
    },

    deleteUIList: function(){
      document.querySelector(UISelectors.itemList).innerHTML = '';
      document.querySelector(UISelectors.totalCalories).textContent = ItemCtrl.getTotalCalories();
    },

    clearInput: function(){
      document.querySelector(UISelectors.itemName).value = '';
      document.querySelector(UISelectors.itemCalories).value = '';
    },

    showList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'block';
    },

    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    setInitialState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
    },

    addItemToForm: function(){
      document.querySelector(UISelectors.itemName).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCalories).value = ItemCtrl.getCurrentItem().calories;
      document.querySelector(UISelectors.addBtn).style.display = 'none';
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
    }
  }
})();


//App Controller
const AppCtrl = (function(ItemCtrl,UICtrl,StrCtrl){

  const loadEventListeners = function(){
    const UISelectors = UICtrl.getSelectors();
    document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);
    document.addEventListener('keypress',(e) => {
      if(e.keyCode === 13 || e.which === 13){
          e.preventDefault();
          return false;
      }
    });
    document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick);
    document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);
    document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit);
    document.querySelector(UISelectors.backBtn).addEventListener('click',UICtrl.setInitialState);
    document.querySelector(UISelectors.clearBtn).addEventListener('click',clearData);
  }

  const itemAddSubmit = function(e){
    const input = UICtrl.getItemInput();

    if(input.name !== '' && input.calories !== '')
    {
      const newItem = ItemCtrl.addItem(input.name,input.calories);
      StrCtrl.persistStrItem(newItem);
      UICtrl.addListItem(newItem);
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){

      let currentItemId = (e.target.parentNode.parentNode.id).split('-')[1];
      ItemCtrl.getItemByID(parseInt(currentItemId));
      UICtrl.addItemToForm();
    }
    
    e.preventDefault();
  }

  const itemUpdateSubmit = function(e){
    let input = UICtrl.getItemInput();

    if(input.name !== '' && input.calories !== '')
    {
      let updatedItem = ItemCtrl.updateItem(input.name,parseInt(input.calories));
      StrCtrl.updateStrItem(updatedItem);
      UICtrl.updateListItem(updatedItem);
      UICtrl.setInitialState();
    }

    e.preventDefault();
  }

  function itemDeleteSubmit(e){
      let deletedItemID = ItemCtrl.deleteItem();
      StrCtrl.removeStrItem(deletedItemID);
      UICtrl.deleteListItem(deletedItemID);
      UICtrl.setInitialState();
      if(ItemCtrl.getItems().length === 0)
        UICtrl.hideList();
    e.preventDefault();
  }

  function clearData(e){
    if(ItemCtrl.getItems().length !== 0 )
    {
      ItemCtrl.deleteData();
      StrCtrl.deleteStr();
      UICtrl.deleteUIList();
      UICtrl.setInitialState();
      UICtrl.hideList();
    }
    
    e.preventDefault();
  }

  return{
    init: function(){
      console.log('Initializing App');
      UICtrl.setInitialState();
      const items = ItemCtrl.getItems();
      if(items.length !== 0){
        UICtrl.showList();
        UICtrl.populateItemList(items);
      }
      loadEventListeners();
    }
  }
})(ItemCtrl,UICtrl,StrCtrl);

AppCtrl.init();