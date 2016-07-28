/**
 * Created by yoyo on 16-7*/

let Routing = require('../src/router');
let routing = new Routing();
describe('postnet', function () {
  // beforeEach(()=>reset());
  it('input 1', function () {
    routing.reset();
    let response = routing.route("1");
    let expected = 'Please input zip code:';
    expect(response).toEqual(expected)
  });

  it('input 2', function () {
    routing.reset();
    let response = routing.route("2");
    let expected = 'Please input bar code:';
    expect(response).toEqual(expected)
  });

  it('input 3', function () {
    routing.reset();
    let response = routing.route("3");
    let expected = 'byebye';
    expect(response).toEqual(expected)
  });

  it('input other', function () {
    routing.reset();
    let response = routing.route("5");
    expect(response).toEqual("no command");
  });

  it('translate', function () {
    routing.reset();
    routing.route("1");
    let response = routing.route("95713");
    expect(response).toEqual("the barcode is :||:|:::|:|:|:::|:::||::||::|:|:|");
  });
  it('translate wrong', function () {
    routing.reset();
    routing.route("1");
    let response = routing.route("9713");
    expect(response).toEqual("Please give right input" + 'Please input zip code:');
  });

  it('translate', function () {
    routing.reset();
    routing.route("2");
    let response = routing.route("||:|:::|:|:|:::|:::||::||::|:|:|");
    expect(response).toEqual("the zipcode is :957135");
  });
  it('translate wrong', function () {
    routing.reset();
    routing.route("2");
    let response = routing.route("||:|:::|:|:|::::||::||::|:|:|");
    expect(response).toEqual("Please give right input" + "Please input bar code:");
  });

  it('start', function () {
    routing.reset();
    let response = routing.route("main");
    let expected = `1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`;
    expect(response).toEqual(expected);
  });
});






