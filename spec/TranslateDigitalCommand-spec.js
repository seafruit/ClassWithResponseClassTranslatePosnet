/**
 * Created by yoyo on 16-7-26.
 */
//
// let Commands = require('../src/command');
// let allCommand = new Commands();
let TranslateDigitalCommand = require('../src/TranslateDigitalCommand');
let InputDigitalCommand = require('../src/InputDigitalCommand');


describe('Take out food', function () {

  it('transRightDigitalCommand',function(){
    let input = '12345';
    let nextGo = new InputDigitalCommand();
    let result =new TranslateDigitalCommand(nextGo).execute(input);
    let expetItem ={
      text:'the barcode is :'+'|:::||::|:|::||::|::|:|:|::|:|:|',
      next:false,
      reset:true,
      newMapping:false
    };
    expect(result.text).toEqual(expetItem.text);
    expect(result.next).toEqual(expetItem.next);
    expect(result.reset).toEqual(expetItem.reset);
    expect(result.newMapping).toEqual(expetItem.newMapping);
  });
  it('transWrongDigitalCommand',function(){
    let nextGo = new InputDigitalCommand();
    let input = '1234555';
    let result =new TranslateDigitalCommand(nextGo).execute(input);
    let expetItem ={
      text:'Please give right input',
      next:nextGo,
      reset: false,
      newMapping:false
    };
    expect(result.text).toEqual(expetItem.text);
    expect(result.next).toEqual(expetItem.next);
    expect(result.reset).toEqual(expetItem.reset);
    expect(result.newMapping).toEqual(expetItem.newMapping);
  });

});
