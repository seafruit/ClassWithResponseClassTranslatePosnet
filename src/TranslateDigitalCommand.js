/**
 * Created by yoyo on 16-7-26.
 */
let CommandResponse = require('./CommandResponse');
let Translator = require('./Translate');
class TranslateDigitalCommand {
  constructor(next){
    this.next = next;
  }
  execute(input) {
    let textString =new Translator().digitalToBarcode(input);
    let item={};
    if (textString.type) {
        item = {
        text: 'the barcode is :' + textString.text,
        next: false,
        reset: true
      }
    } else {
       item = {
        text: 'Please give right input',
        next: this.next,
        reset: false
      }
    }
    return new CommandResponse(item.text,item.next,item.reset,false);
  }
}

module.exports = TranslateDigitalCommand;
