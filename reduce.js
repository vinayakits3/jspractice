// const arr = [1, 2, 3];
// const red = arr.reduce((acc , currVal) =>  {
//     console.log(`acc: ${acc} , currVal: ${currVal}`)
//     return acc + currVal} , 0);
// console.log(red)

const myCart = [
  {
    courseName: 'js Course',
    price: 11999,
  },
  {
    courseName: 'js Course',
    price: 13999,
  },
  {
    courseName: 'js Course',
    price: 1199,
  },
  {
    courseName: 'js Course',
    price: 11999,
  },
];
const totalCost = myCart.reduce((acc,item) => acc + item.price, 0);
console.log(totalCost);
