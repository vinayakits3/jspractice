const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const addOne = myNumbers.map((value) => value +1)
// console.log(addOne)

const newNums = myNumbers
  .map((value) => value * 10)
  .map((val) => val + 1)
  .filter((val) => val >= 40);

  console.log(newNums);

  // after this reduce