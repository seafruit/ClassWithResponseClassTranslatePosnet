/**
 * Created by yoyo on 16-7-26.
 */

let InputBarcodeCommand = require('../src/InputBarcodeCommand');
let TranslatebarcodeCommand =require('../src/TranlateBarcodeCommand');
describe('Take out food', function () {
  it('inputBarcodeCommand',function(){
    let result = new InputBarcodeCommand().execute();
    let expetItem ={
      text: 'Please input bar code:',
      newMapping: {'*':new TranslatebarcodeCommand(new InputBarcodeCommand)},
      reset:false,
      next:false
    };
    expect(result.text).toEqual(expetItem.text);
    expect(result.next).toEqual(expetItem.next);
    expect(result.reset).toEqual(expetItem.reset);
    expect(result.newMapping).toEqual(expetItem.newMapping);
  });
});
