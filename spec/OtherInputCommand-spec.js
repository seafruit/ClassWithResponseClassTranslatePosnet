/**
 * Created by yoyo on 16-7-26.
 */

let MainCommand = require('../src/MainCommand');
let OtherInputCommand = require('../src/OtherInputCommand');
describe('Command-spec', function () {
  it('otherInputCommand',function() {
    let result = new OtherInputCommand().execute();
    let expetItem = {
      text: 'byebye',
      next: new MainCommand(),
      reset: true,
      newMapping:false
      // next:false
    };

    expect(result.text).toEqual(expetItem.text);
    expect(result.next).toEqual(expetItem.next);
    expect(result.reset).toEqual(expetItem.reset);
    expect(result.newMapping).toEqual(expetItem.newMapping);
  });
});
