let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(`inner ${a}`);
}

console.log(`outer ${a}`);
// console.log(b);
// console.log(c);

// 22/51

function one() {
  const username = "Vinayak";
  function two() {
    const website = "youtube";
    console.log(username);
  }

  // won't work
  //   console.log(website);
  two();
}
one();
if (true) {
  const username = "Vinayak";
  if (username === "Vinayak") {
    const website = "youtube";
    console.log(username + " " + website);
  }
  // console.log(website)
}
// console.log(username);
const addOne = (num) => {
  return num + 1;
};
console.log(`after addone ${addOne(5)}`);
const addTwo = (num) => {
  return num + 2;
};
console.log(addone(5))
function addone(num) {
  return num + 1;
};
addTwo(5);
const addtwo = function (num) {
  return num + 2;
};

console.log(`after addTwo ${addTwo(5)}`);
console.log(`after addTwo ${addTwo(addOne(5))}`);
