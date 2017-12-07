# lecture 11

+ DOM : Document Object Model. Gives full access from JavaScript to dynamically
create HTML with specific methods that modify the object representations of HTML
elements.


# lecture 17

~~~ javascript
function print(s) {
  console.log(s);
}
// is equivalent to :
var print = function(s) {
  console.log(s);
}
~~~


# lecture 21

Webpack

1. bundles modules into one .js file
2. comes with a dev-server


# lecture 38

~~~ javascript
var limit = 100;
// becomes
let limit = 100;
// or even
const limit = 100;
~~~

Template Literals

~~~ javascript
let insert = 'world';
`Hello, ${insert} ...`
~~~


# lecture 42 - 43

Spread operator

~~~ javascript
let a = [20, 30, 40]
let b = [10, ...a, 50]
console.log(b) // [10, 20, 30, 40, 50]
~~~

Spread operator in method argument

~~~ javascript
function collect(...a) {
  console.log(a)
  // a = [1, 2, 3]
}

collect(1, 2, 3)
~~~

Destructuring an Array

~~~ javascript
let z = [4, 5, 6]
let [four, five] = z;
console.log(`four: ${four}, five: ${five}.`)
~~~

Destructuring an Object

~~~ javascript
let king = {name: 'Mufasa', age: 32}
let {name, age} = king
console.log(`name is ${name} and age is ${age}.`)
~~~


# Lecture 70 - 75

+ Closures refer to functions that remember their creation environment and can
further reference that environment's independent variables.

+ Lexical scoping refers to the JS concept of programs keeping track of variable
locations to understand in which scopes they can be accessed,

+ Function factories create functions based on returning inner functions that
manipulate its own arguments and the arguments of the outer function.

+ Data encapsulation and private methods don't exist natively in JS but can be
emulated with closures.
