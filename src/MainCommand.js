/**
 * Created by yoyo on 16-7-26.
 */
let Commandresponse = require('./CommandResponse');
class MainCommand {

  execute() {

      let text = `\n
    1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`;
    return new Commandresponse(text,false,false,false);
  }
}
module.exports = MainCommand;

