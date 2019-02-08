const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message,to){
    this.chatroom.send(message,this,to);
  },

  receive: function(message,from){
    console.log(`${from.name} to ${this.name} : ${message}`);
  }
}

const Chatroom = function(){
  let users = {};

  return {
    register: function(user){
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message,from,to){
      if(to){
        to.receive(message,from);
      }
      else{
        for(key in users){
          if(from.name !== key)
            users[key].receive(message,from);
        }
      }
    },
    displayUsers: function()
    {
      console.log(users);
    }
  }
}

const brad= new User('Brad');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);
chatroom.displayUsers();

brad.send("Hello",jeff);
jeff.send("Hai Brad",brad);
brad.send('Hai Everyone');







