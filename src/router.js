/**
 * Created by yoyo on 16-7-27.
 */
let Commands = require('../src/command');
let commands = new Commands();
class Routing {


  constructor() {
    this.mapping={
      '1': commands.inputDigitalCommand,
        '2': commands.inputBarcodeCommand,
        '3': commands.exitCommand,
        'main': commands.mainCommand
    };
  }

  route(input) {
    // let mapping =this.mapping;
    let command = this.mapping[input];
    let result = '';
    let response;
    if (command) {
      response = command(input);
      result += response.text;
    } else if (this.mapping['*']) {
      response = this.mapping['*'](input);
      result += response.text;
    } else {
      return 'no command';
    }

    if (response.next) {
      let newResponse = {};
      do {
        newResponse = response.next();
        result += newResponse.text;
      } while (newResponse.next);
    }

    if (response.reset) {
      new Routing().reset();
    }
    if (response.newMapping) {
      this.mapping = response.newMapping;
    }
    return result;
  }

  reset() {
    // let mapping =this.mapping;
    this.mapping = {
      '1': commands.inputDigitalCommand,
      '2': commands.inputBarcodeCommand,
      '3': commands.exitCommand,
      'main': commands.mainCommand
    }
  }
}
module.exports=Routing;
// let mapping = {
//   '1':commands.inputDigitalCommand,
//   '2':commands.inputBarcodeCommand,
//   '3':commands.exitCommand,
//   'main':commands.mainCommand
// };
// function route(input){
//   let command = mapping[input];
//   let result = '';
//   let response;
//   if(command){
//     response = command(input);
//     result += response.text;
//   }else if(mapping['*']){
//     response=mapping['*'](input);
//     result += response.text;
//   }else{
//     return 'no command';
//   }
//
//   if(response.next){
//     let newResponse={};
//     do{
//       newResponse = response.next();
//       result+=newResponse.text;
//     }while(newResponse.next);
//   }
//
//   if(response.reset){
//     reset();
//   }
//   if(response.newMapping){
//     mapping = response.newMapping;
//   }
//   return result;
// }
//
//
// let reset = function(){
//   mapping = {
//     '1':commands.inputDigitalCommand,
//     '2':commands.inputBarcodeCommand,
//     '3':commands.exitCommand,
//     'main':commands.mainCommand
//   }
// };
//
// module.exports = {route,reset};
