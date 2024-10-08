let p = new Promise((resolve, reject) =>{
    let q = 1 + 1;
    if(q == 2) {
        resolve('success')
    }
    else {
        reject('failed')
    }
} )

p.then((message) =>{
    console.log('this is in the then  ' + message)
}).catch((message) =>{
    console.log('this is in the catch  ' + message)
} )


//-------functions------

//function declartion
function add(num1, num2) {
    console.log(num1 + num2);
}
add(1, 2);

//function expression
let add = function(num1, num2) {
    return num1 + num2;
}
let sum = add(2, 2);
console.log(sum);

//arrow function
let add = (num1, num2) => num1 + num2; // return is used when we write multiple lines of code,curly braces when writing mult lines of code
let sum1 = add(2, 7);
console.log(sum1);

//------object destructuring ------
// this can be useful to assign the properties of an object to a variable in single statement

let person = {
    name : 'ramesh',
    age : 23
};
//syntax let {property1 : variable1, property2 : variable2} = object;
let {name : userName, age : userAge } = person;
console.log(userName);
//if the variable name is same as property name then
//let {name, age} = person;

 let a = 1;
 let b = 2;
 [a,b] = [b,a];
 console.log(a);
 console.log(b);

 let message = "my name is naveen kumar".split(' '); // we use split to split string to array based on what condition is specified in () here we are splitting by spaces
 let [a, b, c, d, e] = message;
 console.log(d);

 //-----evenloop and callback----
console.log('start');
setTimeout(function cb() {
    console.log('callback');
}, 5000);
console.log('end');

console.log('start');
setTimeout(function cbT() {
    console.log('cbT setTimeout');
}, 5000);
fetch("https://api.netflix.com").then(function cbF(){
    console.log('CB netflix');
});
console.log('end');

//******callbacks*******
function sum(a, b) {
    console.log(a + b);
}
function calc(a, b, callback) {
    callback(a, b);
}
calc(2, 3, sum);


//0bject methods

let phone = {
    rate : 20000,
    ram : 6,

    usage : function () {
        console.log('gaming');
    }

};
phone.usage();

//array methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
//output - 4

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(2));
//output - apple

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop()
//output - mango The pop() method returns the value that was "popped out"

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
//output - 5 The push() method returns the new array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
// output - banana The shift() method returns the value that was "shifted out":

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
//output - 5  The unshift() method returns the new array length:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
//output - Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan

//The copyWithin() method copies array elements to another position in an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
// output - ["Banana", "Orange", "Banana", "Orange"]; Copy to index 2, all elements from index 0:

//Copy to index 2, the elements from index 0 to 2:
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
//output - 