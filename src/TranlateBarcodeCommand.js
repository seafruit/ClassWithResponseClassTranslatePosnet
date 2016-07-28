/**
 * Created by yoyo on 16-7-26.
 */
let Translator = require('./Translate');
let CommandResponse =require('./CommandResponse');
class TanslateBarcodeCommands {
  constructor(next){
    this.next=next;
  }
  execute(input) {
    let textString = new Translator().tanslateBarcode(input);
    // console.log(textString.text+'&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    let item={};
    if (textString.type) {
       item= {
        text: 'the zipcode is :' + textString.text,
        next: false,
        reset: true
      }
    } else {
     item= {
        text: 'Please give right input',
        next:this.next,
        reset: false
      }
    }
    return new CommandResponse(item.text,item.next,item.reset,false);
  }
}

module.exports = TanslateBarcodeCommands;
