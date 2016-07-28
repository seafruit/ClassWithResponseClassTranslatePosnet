/**
 * Created by yoyo on 16-7-26.
 */

let CommandResponse = require('./CommandResponse');
let MainCommand = require('./MainCommand');
class OtherInputCommand {
  execute() {
    let item = {
      text: 'byebye',
      next: new MainCommand(),
      reset: true
    };
    return new CommandResponse(item.text, item.next, item.reset, false);
  }
}

module.exports = OtherInputCommand;

