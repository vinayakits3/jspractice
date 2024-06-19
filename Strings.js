const name = "winnnie the pooh ";
console.log(name);
const repocount = 51;
console.log(name + repocount + " Value");

console.log(`heluuu my name is ${name.toUpperCase()} 
and my repo count is ${repocount}`);
const gameNAme = new String('Vinayak-Verma-is');
console.log(gameNAme[0]);
console.log(gameNAme.__proto__);
console.log(gameNAme.charAt(2));
console.log(gameNAme.indexOf('t'));

const newString = gameNAme.substring(0,4);
console.log(newString);

const anotherString = gameNAme.substring(-8,4);
console.log(anotherString);

const newStringOne = "            vinayak   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Vinayak.com/Vinayak%20verma"
console.log(url.replace('%20', '-'));
console.log(url.includes('verma'));
console.log(gameNAme.split('-'));