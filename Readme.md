1.var: we declear variable use this keyword.we can change the value of its variable but it is old we should not use it.

const:
we can also declear variable use it and must assign the value,but we can not reassigned the value of its varibale.on the otherhand for array and object its reference is fixed but change the content. When the value of a varible need not to change we can use it.

let:
it is new, we can declear variable use it and also reassign its variable value but can not redecleared.It is more useable than others.

2.map():
it works as a loop through an array and also return an array with its result but do not change the original array.

forEach():
it also works as a loop through array and executes any work for each element but do not return its result.

filter():
it execute loop through an array an apply condition of its elements one by one and return an new array.Do not modify old array.

3.arrow functions

it is a type of function. It returns automatically as implecit return for single line but do not return for multiple line.Basically it use for short work.

syntax:
const add=(a,b)=> a+b;
when i call add(4,5) it returns 9;

const square=x=>{
const value: x*x;

return value;

}
square(5) it return 25

4.destructuring assignment
its main concept is extract values from array or object and assign them to variables in a line.
For example:

const array=[1,2,3];
const [a,b,c]=array;
console.log(a,b,c) it consoles 1 2 3 that means it assign value into a,b,c similar as object

it helps to assign values in one line and simple program.

5.Template literals:

Generally we use "" or '' this notation for string but it arises problem when we want to print some srting variable value then again string.

On the other hand Template literals are so useful.it is easy and effective solution for this problem.

For example: "Hello everyone.My name is "+name+" My age is "+age

Template literals: `Hello everyone.My name is ${name}. My age is ${age}.` we can write as normal writting
