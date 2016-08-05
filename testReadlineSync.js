// var readlineSync = require('readline-sync');
// let Route = require('./src/Route');
// //
// //
// // let result = route.route("main");
// let input;
// let route = new Route();
// let result = new Route().route("main");
// console.log(result);
// let that, resultText;
// do {
//
//   input = readlineSync.question();
//   resultText = route.route(input);
//   console.log(resultText);
// } while (resultText !== 'byebye');

const request = require('request');
let readlineSync = require('readline-sync');

console.log('Welcome!\n');

let code = readlineSync.question('请输入code:');
const option = {
  url: "http://localhost:3000/code",
  method: "POST",
  json: true,
  body: {'code': code}
};

request(option, function (error, response, body) {
  console.log(body);
});

