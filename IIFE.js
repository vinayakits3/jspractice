// Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB connected`);
})();
(() =>{
    console.log("DIBU Connected");
})();
((name) =>{
    console.log("mei hu", name);
})("vinayak");