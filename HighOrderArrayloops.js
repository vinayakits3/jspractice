// for of
// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5];

// for (const val of arr) {
//     console.log(val);
// }
// const greeetings = "Hello world!";
// for (const greet of greeetings) {
//     if (greet === " ") {
//         continue;
//     }
//     console.log(greet);
// }
const map = new Map();
map.set('IN', "india");
map.set('USA', "United states of america");
map.set('IN', "india");

// console.log(map);
for (const [key, value] of map) {
    console.log(key , value);
}

const myObject = {
    'game1':'NFS',
    'game2':'SPiderman'
}
for(const [key,value] of myObject){
    console.log(key, value);
}