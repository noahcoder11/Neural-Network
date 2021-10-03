// Neuron class
class Neuron {
  constructor(bias){
    this.bias = bias || Math.random()
  }
  forward(input){
    var output = [];
    
    for(var i = 0;i < input.length;i++){
      var n = 0
      for(var j = 0;j < input[i].length;j++){
        n += input[i][j] + this.bias;
      }
      output[i] = n
    }
    
    return output;
  }
}
