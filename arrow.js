const user = {
    username: "vinayak",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
// user.welcomeMessage();
// user.username = `sam`;
// user.welcomeMessage();

// console.log(this);
// function chai() {
//     console.log(this)
// }
// chai();

const chai = () =>{
    let username = "hitesh";
    console.log(this.username);
}
chai();

const addTwo = (num1,num2)=> num1+ num2;
console.log(addTwo(5,7));
// const addTwo2 = (num1,num2)=>  username: "hituuu";