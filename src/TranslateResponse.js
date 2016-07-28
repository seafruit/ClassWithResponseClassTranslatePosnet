class TranslateResPonse {
  constructor(text, type)
  {
    this._text = text;
    this._type = type;
  }
  get type(){
    return this._type;
  }
  get text(){
    return this._text;
  }

  equals(object){
    return object.text === this._text && object.type === this._type;
  }
}

module.exports = TranslateResPonse;
