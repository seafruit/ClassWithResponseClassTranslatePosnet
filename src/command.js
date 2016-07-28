/**
 * Created by yoyo on 16-7-26.
 */
let Translator = require('./best-charge');
let translate = new Translator();
// let translateBarcode = require('../src/best-charge.js/tanslateBarcode');
class Commands {
  constructor() {
  }

  mainCommand(input) {
    return {
      text: `1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`
    }
  }

  inputDigitalCommand(input) {
    let commands = new Commands();
    return {
      text: 'Please input zip code:',
      newMapping: {'*':commands.transDigitalCommand}
    }
  }

  transDigitalCommand(input) {
    let commands = new Commands();
    let text = translate.digitalToBarcode(input);
    if (text.type) {
      return {
        text: 'the barcode is :' + text.barcode,
        next: null,
        reset: true
      }
    } else {
      return {
        text: 'Please give right input',
        next: commands.inputDigitalCommand,
        reset: false
      }
    }
  }

  inputBarcodeCommand(input) {
    let commands = new Commands();
    return {
      text: 'Please input bar code:',
      newMapping: {'*': commands.transBarcodeCommand}
    }
  }

  transBarcodeCommand(input) {
    let commands = new Commands();
    let text = translate.tanslateBarcode(input);
    if (text.type) {
      return {
        text: 'the zipcode is :' + text.digital,
        next: null,
        reset: true
      }
    } else {
      return {
        text: 'Please give right input',
        next: commands.inputBarcodeCommand,
        reset: false
      }
    }
  }

  exitCommand(input) {
    return {
      text: 'byebye',
      next: null,
    }
  }

  otherInputCommand(input) {
    let commands = new Commands();
    return {
      text: 'byebye',
      next: commands.mainCommand,
      reset: true
    }
  }
}

module.exports = Commands;
//
// function mainCommand(input){
//   return {text:`1. Translate zip code to bar code
//     2. Translate bar code to zip code
//     3. Quit
//     Please input your choices(1~3)`}
// }
//
// function inputDigitalCommand(input){
//   return {
//     text:'Please input zip code:',
//     newMapping:{'*':transDigitalCommand}
//   }
// }
// function transDigitalCommand(input){
//   let text = translate.digitalToBarcode(input);
//   if(text.type) {
//     return {
//       text:'the barcode is :'+text.barcode,
//       next: null,
//       reset: true
//     }
//   }else{
//     return {
//       text:'Please give right input',
//       next: inputDigitalCommand,
//       reset: false
//     }
//   }
// }
//
// function inputBarcodeCommand(input) {
//   return {
//     text: 'Please input bar code:',
//     newMapping: {'*': transBarcodeCommand}
//   }
// }
// function transBarcodeCommand(input) {
//   let text = translate.tanslateBarcode(input);
//   if(text.type){
//     return {
//       text: 'the zipcode is :'+text.digital,
//       next: null,
//       reset:true
//     }
//   }else{
//     return {
//       text: 'Please give right input',
//       next: inputBarcodeCommand,
//       reset:false
//     }
//   }
// }
//
// function exitCommand(input){
//   return {
//     text:'byebye',
//     next:null,
//   }
// }
// function otherInputCommand(input){
//   return {
//     text:'byebye',
//     next:mainCommand,
//     reset:true
//   }
// }
// module.exports = {
//   mainCommand,
//   inputDigitalCommand,
//   transDigitalCommand,
//   inputBarcodeCommand,
//   transBarcodeCommand,
//   exitCommand,
//   otherInputCommand
// };
