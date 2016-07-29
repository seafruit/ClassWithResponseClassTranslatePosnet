/**
 * Created by yoyo on 16-7-26.
 */

// let Commands = require('../src/command');
// // let allCommand = new Commands();
let MainCommand = require('../src/MainCommand');
describe('Command-spec', function () {
  it('MainCommand',function(){
    let result = new MainCommand().execute();
    let expectItem ={
      text:`\n
    1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`,
      next:false,
      reset:false,
      newMapping:false
    };
    expect(result.text).toEqual(expectItem.text);
    expect(result.next).toEqual(expectItem.next);
    expect(result.reset).toEqual(expectItem.reset);
    expect(result.newMapping).toEqual(expectItem.newMapping);
  });
});
