let path = require('path');
let bodyParser = require('body-parser');
let express = require('express');
let Translator = require('./Translate');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/zipcode', function (req, res) {
  let input = req.query.zipcode;
  let code = new Translator().digitalToBarcode(input);
  if (code._type) {
    res.send(code._text);
  }else{
    res.send('input error!');
  }
});
app.get('/',function(){
  res.sendfile(path.resolve('../public/menu.html'));
});

app.post('/code',function(req,res){
  let input = req.body.code;
  let outputCode = new Translator().digitalToBarcode(input);
  if (outputCode._type) {
    res.send(outputCode._text);
  }else{
    res.send('input error!');
  }
});
