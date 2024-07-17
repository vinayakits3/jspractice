console.log(`hi`)
const score = 400;
const balance = new Number (100);
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(1));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));
const hunderds = 10000000;
console.log(hunderds.toLocaleString('en-IN'));

//++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
const arr = [1,2,3,4,-5]; 
let min = arr[0];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    min = Math.min(min,element);
}
console.log(`the min is ${min}`)
console.log(Math.min(1,2,3,4,5));


console.log(Math.random())
console.log((Math.random()*10)+1)

// this will include max and min 
const mini = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max- mini + 1))+ mini);