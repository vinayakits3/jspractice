const myArr =[0,1,2,3,4,5,true,"hitesh"];
// shallow copy share same reference / deep copy do not share the same refrences
console.log(myArr[0]);
const myHeros = ["shaktimaaan","naagraj"];
const myArr2 = new Array(0,1,2,3,4,5);
console.log(myArr[1]);

// Array methods

// myArr2.push(6);
// myArr2.push(7);
// console.log(myArr2);
// myArr2.pop();
// console.log(myArr2);
// //unshift is not good genrally
// myArr2.unshift(9);
// console.log(myArr2);
// myArr2.shift(9);
// console.log(myArr2);
// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(3));
// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr)

console.log("A", myArr2);
const myn1 =myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr2)
// splice manipulates original array 
const myn2 =myArr.splice(1,3);
console.log("C", myArr2);
console.log(myn2);

