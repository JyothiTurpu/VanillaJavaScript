// const user = {email: 'jyothi.turpu@gmail.com'};

// try {
//   // myFunction()
//   // null.myFunction();
//   // decodeURIComponent('%');

//   if(!user.name){
//     // throw 'User has no name';
//     throw new SyntaxError('User has no name');
//   }

// } catch (error) {
//   // console.log(error);
//   // console.log(error.name);
//   console.log(error.message);
//   // console.log(error instanceof TypeError);
//   // console.log(`${error.name} Its Null!`);
// }finally{
//   console.log(`Error is an instance of `);
// }
// console.log("Program Continues....");

// REGULAR EXPRESSIONS


// let re;
// re =/hello/i; //i = case insensitive
// re = /hello/g; // g = global search


// console.log(re);
// console.log(re.source);

// const result = re.exec('Hello  hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// const result = re.test('Hello');
// console.log(result);


// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// const str = 'Jyothi Hello World';
// const result = str.search(re);
// console.log(result);

// const str = 'Jyothi like JavaScript and Hello world';
// const result = str.replace(re,'HI');
// console.log(result);
let re;
re = /hello/i;
re = /^h/i;
re = /world$/i;
re = /^hello$/i
re = /^h.llo$/i;
re = /h*llo/i;
re = /gra?e?y/i;
re = /gre?a?y\?/i;
re = /gr[ae]y/i;
re = /[^A-Z]ray/i;
re = /[A-Z]ray/i;
re = /[A-Za-z]ray/i;
re = /^[0-100a-zA-Z]ray/;

const str = 'ray?';
const result = re.exec(str);
console.log(result);

function reTest(re,str){
  if(re.test(str)){
    console.log(`${str} matched ${re.source}`);
  }
  else{
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re,str);