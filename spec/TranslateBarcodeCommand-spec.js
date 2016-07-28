/**
 * Created by yoyo on 16-7-26.
 */

// let Commands = require('../src/command');
// let allCommand = new Commands();
let TranslateBarcodeCommand = require('../src/TranlateBarcodeCommand');
let InputBarcodeCommand = require('../src/InputBarcodeCommand');


describe('Take out food', function () {
  it('transRightBarcode',function(){

    let input='|:::||::|:|::||::|::|:|:|::|:|:|';
    let next = new InputBarcodeCommand();
    let result = new TranslateBarcodeCommand(next).execute(input);
    let expetItem = {
      text: 'the zipcode is :'+'123455',
      reset:true,
      next:false,
      newMapping:false
    };
    expect(result.text).toEqual(expetItem.text);
    expect(result.next).toEqual(expetItem.next);
    expect(result.reset).toEqual(expetItem.reset);
    expect(result.newMapping).toEqual(expetItem.newMapping);
  });
  it('transWrongBarcode',function(){
    let input = '|:::|:|::||::|::|:|:|::|:|:|';
    let next = new InputBarcodeCommand();
    let result = new TranslateBarcodeCommand(next).execute(input);
    let expetItem = {
      text: 'Please give right input',
      next,
      reset:false,
      newMapping:false
    };
    expect(result.text).toEqual(expetItem.text);
    expect(result.next).toEqual(expetItem.next);
    expect(result.reset).toEqual(expetItem.reset);
    expect(result.newMapping).toEqual(expetItem.newMapping);
  })

});
