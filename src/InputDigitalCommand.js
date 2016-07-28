/**
 * Created by yoyo on 16-7-26.
 */
let TranslateDigitalCommand = require('./TranslateDigitalCommand')
let CommandResponse = require('./CommandResponse');
class InputDigitalCommand {

  execute() {
    let item= {
      text: 'Please input zip code:',
      newMapping: {'*': new TranslateDigitalCommand(new InputDigitalCommand())}
    };
    return new CommandResponse(item.text,false,false,item.newMapping);
  }



}
module.exports = InputDigitalCommand;
