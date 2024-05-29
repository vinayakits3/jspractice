function sayMyName() {
  console.log(`heeeloo`);
}
sayMyName();
function addTwoNumbers(n1, n2) {
  console.log(n1 + n2);
  return n1 + n2;
}
addTwoNumbers(3, 4);
const result = addTwoNumbers(3, 4);
console.log(result);

function loginUserMessage(username) {
  if (!username) {
    username = "new user";
  }
  return `${username} just logged in`;
}

const res = loginUserMessage("vinayak");
console.log(res);
function calculateCartPriceOri(...num1) {
  return num1;
}
console.log(calculateCartPriceOri(200, 400, 500));
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "vin",
  prices: 9999,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.prices}.`
  );
}
console.log(handleObject(user));
console.log(
  handleObject({
    username: "sam",
    price: 399,
  })
);

const myNewArray = [200, 400, 100, 600];
const returnSecondValue = (getArray) =>{
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
