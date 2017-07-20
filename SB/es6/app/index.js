console.log('Hello world! (from webpack) with automatic updates!')

let a = [20, 30, 40]
let b = [10, ...a, 50]
console.log('Spread operator on b : ', b)

function collect(...a) {
  console.log(a)
}
collect(1, 2, 3)

// Destructuring an Array
let z = [4, 5, 6]
let [four, five] = z;
console.log(`four: ${four}, five: ${five}.`)

// Destructuring an Object
let king = {name: 'Mufasa', age: 32}
let {name, age} = king
console.log(`name is ${name} and age is ${age}.`);

/* Same but not in same line as let declaration will fail because of {} declares
 a block. So we need to encapsulate it into (). */
({name, age} = king)
console.log(`name is ${name} and age is ${age}.`);
