/**
 * Created by yoyo on 16-7-26.
 */
let CommandResponse = require('./CommandResponse');
let TranlateBarcodeCommand =require('./TranlateBarcodeCommand');
class InputBarcodeCommand{
  execute() {
    let item= {
      text: 'Please input bar code:',
      newMapping: {'*': new TranlateBarcodeCommand(new InputBarcodeCommand())}
    }
    return new CommandResponse(item.text,false,false,item.newMapping);
  }
}
module.exports = InputBarcodeCommand;
