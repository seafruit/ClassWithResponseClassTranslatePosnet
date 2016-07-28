let allItem = require('../src/items');
let Translator = require('../src/Translate');

describe('Take out food', function () {
  it ('checkDigitalFormat',function(){
    let input = '12345';
    let result = new Translator().checkDigitalFormat(input);
    let expectItem ={digital:'12345',type: true};
    expect(result).toEqual(expectItem);
  });
  it ('checkDigitalFormat',function(){
    let input = '123456789';
    let result = new Translator().checkDigitalFormat(input);
    let expectItem ={digital:'123456789',type: true};
    expect(result).toEqual(expectItem);
  });
  it ('checkDigitalFormat',function(){
    let input = '12345-6789';
    let result = new Translator().checkDigitalFormat(input);
    let expectItem ={digital:'12345-6789',type: true};
    expect(result).toEqual(expectItem);
  });
  it ('checkDigitalFormat',function(){
    let input = 'shdui2839-23';
    let result = new Translator().checkDigitalFormat(input);
    let expectItem ={digital:'shdui2839-23',type: false};
    expect(result).toEqual(expectItem);
  });

  it('dropHypken',function(){
    let input = '12345-6789';
    let result = new Translator().dropHypken(input);
    let expectItem = '123456789';
    expect(result).toEqual(expectItem);
  });
  it('digtialIntoArray',function(){
    let input = '123456789';
    let result = new Translator().digtialIntoArray(input);
    let expectItem = [1,2,3,4,5,6,7,8,9];
    expect(result).toEqual(expectItem);
  });
  it('calculateCheckCode',function(){
    let input = [1,2,3,4,5];
    let result = new Translator().calculateCheckCode(input);
    let expectItem = [1,2,3,4,5,5];
    expect(result).toEqual(expectItem);
  });
  it('matchBarcode',function(){
    let input = [1,2,3,4,5,5];
    let allItems=allItem();
    let result = new Translator().matchBarcode(input,allItems);
    let expectItem = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
    expect(result).toEqual(expectItem);
  });
  it('addStartAndEnd',function(){
    let input = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
    let result = new Translator().addStartAndEnd(input);
    let expectItem = '|:::||::|:|::||::|::|:|:|::|:|:|';
    expect(result).toEqual(expectItem);
  });

  it('digitalConversionToBarcode',function(){
    let input = '12345';
    let result = new Translator().digitalToBarcode(input);
    let expectItem ={text:'|:::||::|:|::||::|::|:|:|::|:|:|',type:true};
    expect(result.text).toEqual(expectItem.text);
    expect(result.type).toEqual(expectItem.type);
  });
  it('digitalConversionToBarcode',function(){
    let input = '1234555';
    let result = new Translator().digitalToBarcode(input);
    let expectItem ={text:'1234555',type:false};
    expect(result.text).toEqual(expectItem.text);
    expect(result.type).toEqual(expectItem.type);
  });

  it('checkBarcodeFormat',function(){
    let input = '|:::||::|:|::||::|::|:|:|::|:|:|';
    let result = new Translator().checkBarcodeFormat(input);
    let expectItem ={barcode:'|:::||::|:|::||::|::|:|:|::|:|:|',type:true};
    expect(result).toEqual(expectItem);
  });
  it('checkBarcodeFormat',function(){
    let input = '|:::||::|:|::||::|::|:|:|';
    let result = new Translator().checkBarcodeFormat(input);
    let expectItem ={barcode:'|:::||::|:|::||::|::|:|:|',type:false};
    expect(result).toEqual(expectItem);
  });
  it('checkBarcodeFormat',function(){
    let input = '|:::||::|:|::||::|::|:|:|sdfsdgthggfewrtukiggfb';
    let result = new Translator().checkBarcodeFormat(input);
    let expectItem ={barcode:'|:::||::|:|::||::|::|:|:|sdfsdgthggfewrtukiggfb',type:false};
    expect(result).toEqual(expectItem);
  });

  it('formattedBarcode',function(){
    let input = '|:::||::|:|::||::|::|:|:|::|:|:|';
    let result = new Translator().formattedBarcode(input);
    let expectItem =':::||::|:|::||::|::|:|:|::|:|:';
    expect(result).toEqual(expectItem);
  });

  it('barcodeIntoArrar',function(){
    let input = ':::||::|:|::||::|::|:|:|::|:|:';
    let result = new Translator().barcodeIntoArrar(input);
    let expectItem =[':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
    expect(result).toEqual(expectItem);
  });

  it('matchDigital',function(){
    let allItems=allItem();
    let input = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
    let result = new Translator().matchDigital(input,allItems);
    let expectItem =[1,2,3,4,5,5];
    expect(result).toEqual(expectItem);
  });

  it('isTrueCheckCode',function(){
    let input = [1,2,3,4,5,5];
    let result = new Translator().isTrueCheckCode(input);
    let expectItem =true;
    expect(result).toEqual(expectItem);
  });

  it('addHypken',function(){
    let input =[1,2,3,4,5,6,7,8,9];
    let result= new Translator().addHypken(input);
    let expectItem='12345-6789';
    expect(result).toEqual(expectItem);
  });

  it('tanslateBarcode',function(){
    let input='|:::||::|:|::||::|::|:|:|::|:|:|';
    // let result=new Translator().outfunction();
    let result=new Translator().tanslateBarcode(input);
    let expectItem={text:'123455',type:true};
    expect(result.text).toEqual(expectItem.text);
    expect(result.type).toEqual(expectItem.type);
  });
  it('tanslateBarcode',function(){
    let input='|:::||::|:|::||::|::|:|:sddcws';
    let result= new Translator().tanslateBarcode(input);
    // let result= new Translator().outfunction(input);
    let expectItem={text:'|:::||::|:|::||::|::|:|:sddcws',type:false};
    expect(result.text).toEqual(expectItem.text);
    expect(result.type).toEqual(expectItem.type);
  });
});
