/**
 * Created by yoyo on 16-7-26.
 */

let InputDigitalCommand = require('../src/InputDigitalCommand');
let TranslateDigitalCommand = require('../src/TranslateDigitalCommand');

describe('Take out food', function () {
  it('inputDigitalCommand',function(){
    let result =new InputDigitalCommand().execute();
    let expetItem ={
      text:'Please input zip code:',
      newMapping:{'*':new TranslateDigitalCommand(new InputDigitalCommand())},
      reset:false,
      next:false
    };
    expect(result.text).toEqual(expetItem.text);
    expect(result.next).toEqual(expetItem.next);
    expect(result.reset).toEqual(expetItem.reset);
    expect(result.newMapping).toEqual(expetItem.newMapping);
  })

});
