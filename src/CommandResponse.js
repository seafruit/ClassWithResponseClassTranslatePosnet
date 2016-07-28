class CommandResponse {
  constructor(text,next=false,reset=false,newMapping=false){
    this._text=text;
    this._next=next;
    this._reset=reset;
    this._newMapping=newMapping;
  }
  get text(){
    return this._text;
  }
  get next(){
    return this._next;
  }
  get reset(){
    return this._reset;
  }
  get newMapping(){
    return this._newMapping;
  }
  // equals(object){
  //   return object.text===this.text && object.next===this.next && object.reset===this.reset&&object.newMapping===this.newMapping;
  // }
}

module.exports =CommandResponse;
