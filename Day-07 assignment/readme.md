## Theory 
# 1.What are anonymous functions in JavaScript?
- an anonymous function is that type of function that has no name or we can say which is without any name. When we create an anonymous function, it is declared without any identifier.
The main focused point is that there is no function we have declared before. It is just the keyword function and parenthesis
```js
let a_fx = function () {  
    console.log('anonymous function');  
};  
a_fx();
``` 
-USES
+ Immediate execution of a function

In order to invoke and execute a function immediately after its declaration, creating an anonymous function is the best way. 
```js
(function() {  
    console.log('Hello');  
})(); 
```
+ Passing an anonymous function to other function as its argument
```js
abs(function () {  
    console.log('Execute later after 1 second')  
}, 100);  
```

# 2.Explain strict comparison and Abstract comparison in javascript?
- (Abstract) == or === (Strict)
Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different. 
```js
console.log(true == '1'); // true
console.log(true === '1'); // false
```
The abstract equality comparison performs a type conversion.

## 3.Difference b/w arrow functions and regular functions?
- Regular functions are constructible and they can be called using the new keyword
-The arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions
```js
var add = function(x, y) {
  return x + y;
};
//arrow fx ->
let add = (x, y) => { return x + y };
```
+ Curly brackets aren’t required if only one expression is present.
```js
let add = (x, y) => x + y;
```
+ if there are no arguments-
```js
let sayHi = _ => console.log(“Hi”);
```
+ Arrow functions do not have an arguments binding
```js
let myFunc = {  
 showArgs(){ 
  console.log(arguments); 
 } 
}; 
myFunc.showArgs(1, 6, 13, 4);
```
## 4.What is Hoisting in JavaScript?
- Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.
- In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.


## 5.JavaScript is a garbage collected programming language, explain how?
- The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

## 6.Explain Shallow copy vs Deep copy in Javascript?
## 7.What is Object.freeze
- The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed.
- Freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.


































## Programs -
+ Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

```js
function getRandomNumberBetween(min1,max1,min2,max2){
    var v1=Math.floor(Math.random()*(max1-min1+1)+ min1);
    var v2=Math.floor(Math.random()*(max2-min2+1)+min2);
    
    console.log( Math.random() < 0.5 ? v1 : v2 );
}
getRandomNumberBetween(800,900,-100,0);
```