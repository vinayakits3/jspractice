const user = {
    username: "vinayak",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
console.log(user.welcomeMessage())