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


// Arrow functions
// function() {
//   // This is pre-es6 syntax
// }

() => {
  // This is es6 syntax
  // function is _anonymous_
}

// With map helper methods:
let values = [20, 30, 40]
let doubledUgly = values.map(function(n){
  return n*2
})
let doubled = values.map((n) => {
  return n*2
})
let doubledBeauty = values.map((n) => n*2)
// console.log(doubledUgly)
// console.log(doubled)
// console.log(doubledBeauty)

// With filter helper methods:
let points = [15, 3, 18, 23, 10, 32]
let highScores = points.filter((n) => {
  return n > 15
})
let highScoresWithLessCode = points.filter((n) => n > 15)


// String helpers
console.log('String helpers')
let msg = 'wooh' + 'oo'.repeat(50)
console.log(msg)
// woohoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

msg = `wooh${'oo'.repeat(50)}`
console.log(msg)
// woohoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

console.log('butterfly'.startsWith('butter')) // true
console.log('butterfly'.includes('tt')) // true
console.log('butterfly'.endsWith('fly')) // true


// Number helpers
console.log('Number helpers')
console.log(Number.isFinite(32)) // true
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isSafeInteger(321)) // true
console.log(Number.isSafeInteger(Math.pow(2, 54))) // false


// Modules
console.log('Modules')
import { fellowship, total } from './fellowship'
console.log(fellowship, total) // (3) ["Alice", "Bob", "Charles"] 3

import { add, multiply } from './math'
console.log(add(2, 3)) // 5
console.log(multiply(2, 3)) // 6

import defMultiply from './math'
console.log(defMultiply(3, 4)) // 12


// Objects, classes
console.log('Objects, classes, prototypes')
import Lion from './Lion'

let simba = new Lion('Simba', 2, 'golden')
console.log(simba)  // Lion {name: "Simba", height: 2, color: "golden"}
simba.hello()  // Hi! This is Simba from Pride Rock!


// Prototypes
function Wizard(name, house, pet) {
  this.name = name
  this.house = house
  this.pet = pet

  this.greet = () => `Hi, I'm ${this.name} from ${this.house}.`
}

// declare a new attribute
Wizard.prototype.pet_name;

// declare a new method
// Wizard.prototype.info = () => `I have a ${this.pet} named ${this.pet_name}`
// Doesn't work since arrow function doesn't create this object in local scope
Wizard.prototype.info = function() {
  return `I have a ${this.pet} named ${this.pet_name}`
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl")
harry.pet_name = "Hedwig"
console.log(harry)
console.log(harry.greet())
console.log(harry.info())


// Data Structures  Lecture 63 - 65
console.log('Data Structures - Set')

let aSet = new Set()
aSet.add(5)
aSet.add(43)
aSet.add('woohoo')
aSet.add({x: 50, y: 200})
console.log(aSet)
console.log(aSet.size)  // 4
console.log(aSet.has(5))  // true

let numbers = [5, 2, 12, 76, 100, 2]
let aSet2 = new Set(numbers)
console.log(aSet2)

for (let elem of aSet2){
  console.log(elem)
}

let chars = 'asdlfkjhasclkasjdchfaskjdhscjl'
let chars_array = chars.split('')
let chars_set = new Set(chars_array)
console.log(chars_set)
