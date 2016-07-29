var readlineSync = require('readline-sync');
let Route = require('./src/Route');
//
//
// let result = route.route("main");
//
let input;
let route = new Route();
let result = new Route().route("main");
console.log(result);
let that,resultText;
do{

  input=readlineSync.question();
  resultText = route.route(input);

  console.log(resultText);
}while(resultText!=='byebye');


// while(true){
//
// }
//
// function doOneRound(read, log){
//   let input = read();
//   result = route.route(input);
//   log(result);
// }
//
// function read(){
//   return "1"
// }
//
//
// function log(result){
//   expect(result).to.equal("")
// }

