class Activation {
  constructor(a){
    this.activation = a || {
      forward: function(x){
        return Math.max(0, x)
      }
    }
  }
  forward(input){
    var output = [];
    
    for(var i = 0;i < input.length;i++){
      output[i] = this.activation(input[i])
    }
    
    return output
  }
}
