const array = ["java", "javascript", "python", "c++", "c#"];
// array.forEach(function (val){
//     console.log(val);
// })
// array.forEach( item => console.log(item));

// function printMe(params) {
//     console.log(params)
// }
// array.forEach(printMe)

// array.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

const objectInsideArray = [
  { languageName: "java", languageFileName: "java" },
  { languageName: "python", languageFileName: "py" },
  { languageName: "c++", languageFileName: "cpp" },
];
objectInsideArray.forEach( item => console.log(item.languageFileName))