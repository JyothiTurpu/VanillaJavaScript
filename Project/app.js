
// function Person(name,dob)
// {
//   this.name = name;
//   this.birthday = new Date(dob);
//   this.calculateAge = function(){
//     const todaysDate = new Date(Date.now());
//     return (todaysDate.getFullYear() - this.birthday.getFullYear());
//   }
// }

// const prsn = new Person('Brad','9-10-1981');
// console.log(`${prsn.name} is ${prsn.calculateAge()} years old`);

// const name1 = 'Jeff';
// const name2 = new String('Jeff');


// console.log(typeof(name1));
// console.log(typeof(name2));

// if(name2 === 'Jeff')
//   console.log('Yes');
// else
//   console.log('No');


// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);
// console.log(typeof num2);

// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(bool2 + " bool2 type is "+ typeof bool2);


// const getSum1 = function(x,y){
//   return x + y;
// }

// const getSum2 = new Function('x','y','return x + y');

// console.log(typeof getSum2(100,2));


// const john1 = {
//   name : 'John'
// }
// console.log(john1);
// console.log(typeof john1);

// const john2 = new Object('John');
// console.log(john2);
// console.log(typeof john2);

// const arr1 = [1,2,3];
// console.log(arr1);

// const arr2 = new Array(1,2,3);
// console.log(arr2);

// const regexp1 = /\w+/;
// const regexp2 = new RegExp('\\w+');

// console.log(regexp1);
// console.log(regexp2);

// // Object.prototype
// function Person(firstname,lastname,dob)
// {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function(){
//   //   const todaysDate = new Date(Date.now());
//   //   return (todaysDate.getFullYear() - this.birthday.getFullYear());
//   // }
// }

// Person.prototype.calculateAge = function(){
//   const todaysDate = new Date(Date.now());
//   return (todaysDate.getFullYear() - this.birthday.getFullYear());
// }

// Person.prototype.getFullName = function(){
//   return `${this.firstname} ${this.lastname}`;
// }

// Person.prototype.getsMarried = function(newLastName){
//   this.lastname = newLastName;
// }

// const mary = new Person('Mary','Johnson','March 20 1978');
// console.log(mary);
// console.log(mary.getFullName());
// console.log(mary.calculateAge());

// mary.getsMarried('Smith');

// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty('firstname'));
// console.log(mary.hasOwnProperty('getFullName'));

// function Person(firstName,lastName)
// {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting =  function()
// {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John','Doe');
// console.log(person1.greeting());

// function Customer(firstName,lastName,phoneNumber,membership){
//   Person.call(this,firstName,lastName);
//   this.phoneNumber = phoneNumber;
//   this.membership = membership;
// }
// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.constructor = Customer;
// Customer.prototype.greeting = function()
// {
//   return `Hello there ${this.firstName} ${this.lastName}, Welcome to our company.`;
// }

// const customer1 = new Customer('Tom','Smith','555-555-555','Standard');
// console.log(customer1);
// console.log(customer1.greeting());

// const personPrototypes = {
//   greeting: function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName){
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;
// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// const brad = Object.create(personPrototypes,{
//   firstName: {value:"Brad"},
//   lastName: {value: "Traversy"},
//   age: {value:36}
// });
// console.log(brad.greeting());

// class Person{

//   constructor(firstName,lastName,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting()
//   {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge()
//   {
//       const todaysDate = new Date(Date.now());
//       return (todaysDate.getFullYear() - this.birthday.getFullYear());
//   }

//   getsMarried(newLastName)
//   {
//     this.lastName = newLastName;
//   }

//   static getFullName()
//   {
//     return `Default Default`;
//   }

// }

// const mary = new Person('Mary','Williams','11-13-1980');
// console.log(mary);
// console.log(mary.greeting());
// console.log(mary.calculateAge());

// mary.getsMarried('Thompson');
// console.log(Person.getFullName());

class Person{
  constructor(firstName,lastName)
  {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting()
  {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person{
  constructor(firstName,lastName,phone,membership)
  {
    super(firstName,lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost()
  {
    return 500;
  }
}

const customer1 = new Customer('John', 'Doe','555-555-555','Standard');
console.log(customer1.greeting());
console.log(Customer.getMembershipCost());