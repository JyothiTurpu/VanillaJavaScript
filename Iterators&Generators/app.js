// function nameIterator(names){
//   let nextIndex = 0;
//   return{
//     next : function(){
//       return nextIndex < names.length ? 
//       { value : names[nextIndex++], done : false } :
//       { done: true }
//     }
//   }
// }

// const namesArr = ['Jack','Jill','John'];
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

function* sayNames(){
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

function* createIDS()
{
  let index = 0;
  while(true)
  {
    yield index++;
  }
}

const gen = createIDS();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


