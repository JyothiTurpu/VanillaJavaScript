const set1 = new Set();
set1.add(100);
set1.add("A String");
set1.add(true);
set1.add({name : "John"});

const set2 = new Set([100,true,function(){},{name: 'Jyothi'},'A string']);

console.log(set1);
console.log(set2);

console.log(set1.size);
console.log(set2.has('A string'));
console.log(set2.has({name: 'Jyothi'}));
console.log(set2.has(50+50));

set1.delete(100);
console.log(set1);

console.log(set2.size);
for(let item of set2)
{
  console.log(item);
}

console.log(set2.keys());
console.log(set2.values());

set2.forEach(value => {
  console.log(value);
});

const setValArr = Array.from(set2);
console.log(setValArr);