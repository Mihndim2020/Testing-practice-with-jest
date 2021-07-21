// const sum = function(a,b){
//   return a + b;
// }

const stringLength = function(string){
  if(!(string.length > 0 && string.length <= 10)){
    return "There is an error"
  }
  // return string.length;
}

// module.exports = sum;
// module.exports = stringLength;

const reverseString = function(string){
  return string.split("").reverse().join("");
}

// module.exports = reverseString;
 
export default class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(){
    return this.a + this.b;
  }
  subtract(){ 
    return this.a - this.b;
  }
  multiply(){
    return this.a * this.b;
  }
  divide(){
    return this.a / this.b;
  }
}

module.export = Calculator;