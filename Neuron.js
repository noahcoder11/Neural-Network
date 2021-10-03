// Neuron class
class Neuron {
  constructor(bias){
    this.bias = bias || Math.random()
  }
  forward(input){
    var n = [];
    for(var i = 0;i < input.length;i++){
      n[i] = input[i] + this.bias;
    }
    return n;
  }
}
