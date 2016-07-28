/**
 * Created by yoyo on 16-7-26.
 */
let CommandResponse = require('./CommandResponse');
// let translateBarcode = require('../src/best-charge.js/tanslateBarcode');
class ExitCommands {

  execute(input) {
    return new CommandResponse('byebye',false,false,false);
  }

}

module.exports = ExitCommands;
