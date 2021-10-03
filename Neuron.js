// Neuron class
class Neuron {
  constructor(bias){
    this.bias = bias || Math.random()
  }
  forward(input){
    var output = [];
    
    for(var i = 0;i < input.length;i++){
      output[i] = input[i] + this.bias;
    }
    
    return output;
  }
}
