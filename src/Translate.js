let allItem = require('./items');
let _ = require('lodash');
const TranslateResponse = require('./TranslateResponse');

class Translator {

  checkDigitalFormat(digital) {
    // if(digital.length == 10){
    //   if(digital.includes('-') && digital.indexOf('-') ===5&& digital.lastIndexOf('-')===5){
    //
    //   }
    // }
    let hasHypken = digital.includes('-') && digital.indexOf('-') ===5&& digital.lastIndexOf('-')===5;
    let isNumber = /^[0-9]*$/.test(digital.replace('-', ''));
    if ((digital.length === 10 && hasHypken && isNumber) || (isNumber && (digital.length === 5 || digital.length === 9))) {
      return {digital, type: true}
    }
    return {digital, type: false}
  }

  dropHypken(digital) {
    return digital.replace('-', '');
  }

  digtialIntoArray(formatedDigital) {
    return formatedDigital.split('').map((item)=>+item)
  }

  calculateCheckCode(digitalArray) {
    let sum = _.sum(digitalArray);
    let checkCode = sum % 10 == 0 ? 0 : 10 - sum % 10;
    digitalArray.push(checkCode);
    return digitalArray
  }

  matchBarcode(digitalAndCheckCode, allItems) {
    return digitalAndCheckCode.map((digitalItem)=> {
      let found = allItems.find((item)=>item.digital === digitalItem);
      return found.barcode
    })
  }

  addStartAndEnd(barcodes) {
    return '|' + barcodes.join('') + '|'
  }

  digitalToBarcode(digital) {
    let returnInformation = this.checkDigitalFormat(digital);
    if (returnInformation.type === true) {
      let allItems = allItem();
      let formattedDigital = this.dropHypken(digital);
      let digitalArray = this.digtialIntoArray(formattedDigital);
      let digitalAndCheckCode = this.calculateCheckCode(digitalArray);
      let barcodes = this.matchBarcode(digitalAndCheckCode, allItems);
      let barcodeString = this.addStartAndEnd(barcodes);
      return new TranslateResponse(barcodeString, true);
    }
    return new TranslateResponse(returnInformation.digital,returnInformation.type);
  }


  formattedBarcode(input) {
    return input.substring(1, input.length - 1);
  }

  barcodeIntoArrar(formattedBarcode) {
    return _.words(formattedBarcode, /.{5}/g);
  }

  matchDigital(barcodeArrar, allItems) {
    return barcodeArrar.map((barcode)=> {
      let found = allItems.find((item)=>item.barcode === barcode);
      return found.digital
    })
  }

  isTrueCheckCode(digitals) {
    return _.sum(digitals) % 10 === 0
  }

  addHypken(digital) {
    if (digital.length === 9) {
      digital.splice(5, 0, '-');
    }
    return digital.join('');
  }

  checkBarcodeFormat(input) {
    let startAndEnd = _.endsWith(input, '|') && input.indexOf('|') === 0;
    if (startAndEnd && (input.length === 32 || input.length === 52)) {
      let barcode = input.substring(1, input.length - 1);
      // let barcodeArray = barcodeIntoArrar(barcode);
      let barcodeArray = _.chunk(barcode, 5).map((item)=>item.join());
      let exit = true;
      for (let item of barcodeArray) {
        if (item.match(/\|/g).length !== 2 && item.match(/:/g).length !== 3) {
          exit = false;
        }
      }
      if (exit) {
        return {barcode: input, type: true}
      }
      return {barcode: input, type: false}
    } else {
      return {barcode: input, type: false}
    }
  }

  tanslateBarcode(input) {
    let allItems = allItem();
    let isFormattedBarcode = this.checkBarcodeFormat(input);
    // console.log(isFormattedBarcode);
    if (isFormattedBarcode.type) {
      // debugger;
      let formatBarcode = this.formattedBarcode(input);
      let barcodeArray = this.barcodeIntoArrar(formatBarcode);
      let digitals = this.matchDigital(barcodeArray, allItems);
      let isRight = this.isTrueCheckCode(digitals);
      if (!isRight) return false
      let digital = this.addHypken(digitals);
      return new TranslateResponse(digital, true)
    } else {
      return new TranslateResponse(isFormattedBarcode.barcode,isFormattedBarcode.type)
    }
  }
}


module.exports = Translator;



