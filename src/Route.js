/**
 * Created by yoyo on 16-7-27.
 */
let Commands = require('../src/command');
let commands = new Commands();
let MainCommand = require('./MainCommand');
let ExitCommand = require('./ExitCommand');
let InputDigitalCommand = require('./InputDigitalCommand');
let InputBarcodeCommand = require('./InputBarcodeCommand');
class Routing {
  constructor() {
    this.mapping = {
      '1': new InputDigitalCommand,
      '2': new InputBarcodeCommand,
      '3': new ExitCommand,
      'main': new MainCommand()
    };
  }

  executeCommand(command, input) {
    if (command.execute) {
      return command.execute(input);
    } else {
      return command(input);
    }
  }

  route(input) {
    // let mapping =this.mapping;
    let command = this.mapping[input];
    let result = '';
    let response = '';
    if (command) {
      response = this.executeCommand(command, input);
      result += response.text;
    } else if (this.mapping['*']) {
      command = this.mapping['*'];
      response = this.executeCommand(command, input);
      result += response.text;
    } else {
      return 'no command';
    }

    if (response.next) {
      let newResponse = {};
      do {
        newResponse = response.next;
        newResponse = response.next.execute(input);
        result+=newResponse.text;
      } while (newResponse.next);
    }

    if (response.reset) {
      this.reset();
      result+=`\n
    1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`;
    }
    if (response.newMapping) {
      this.mapping = response.newMapping;
    }
    return result;
  }

  reset() {
    // let mapping =this.mapping;

    this.mapping = {
      '1': new InputDigitalCommand,
      '2': new InputBarcodeCommand,
      '3': new ExitCommand,
      'main': new MainCommand()
    }

  }
}
module.exports = Routing;
