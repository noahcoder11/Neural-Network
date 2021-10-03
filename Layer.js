class Layer {
  constructor(neurons, activation, inputLength){
    this.neurons = neurons
    this.operations = []
    this.inputLength = inputLength
    this.activation = activation
  }
  setup(){
    for(var i = 0;i < this.neurons;i++){
      var connections = []
      for(var j = 0;j < this.inputLength;j++){
          connections.push(new Connection())
      }
      this.operations.push({
        neuron: new Neuron(),
        connections: connections
      })
    }
  }
  forward(input){
    var output = []
    
    for(var i = 0;i < input.length;i++){
      for(var j = 0;j < this.operations.length;j++){
        var c = []
        for(var k = 0;k < this.operations[j].connections.length;k++){
          c[k] = this.operations[j].connections[k].forward(input[i])
        }
        output[j] = this.operations[j].neuron.forward(c)
      }
    }
    
    return output
  }
}
