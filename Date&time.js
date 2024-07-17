let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let jsonDate = myCreatedDate.toJSON();
// console.log(jsonDate.toDateString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toJSON());
// console.log(myCreatedDate.toLocaleString());

let myNewDate = new Date("2023-01-14");
// console.log(myNewDate.toLocaleDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/(1000*60)));

// function printStar(row){
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j <=i; j++) {
//             process.stdout.write(`*`);
//         }
//         console.log(``);
//     }
// }
// printStar(5);

// let arr = [1,2,3,4,5,6];
// let max = arr[0];
// let min = arr[0];
// function giveMaxMinInArray(array){
//     array.forEach(element => {
//         max=Math.max(element,max);
//         min=Math.min(element,min);
//     });
//     return [max,min];
// }
// console.log(giveMaxMinInArray(arr));

// function fiboonaci( max ){
//     let k =0;
//     for (let i = 0; i < max; i++) {
//           k = k +i;
//         process.stdout.write(`${k}`);
//     }
// }
// fiboonaci(3);
console.log(myNewDate.getDay());
console.log(myNewDate.toLocaleString('default',{weekday:"long",}))

