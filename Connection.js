class Connection {
  constructor(weight){
    this.weight = weight || Math.random()
  }
  forward(input){
    var output = [];
    
    for(var i = 0;i < input.length;i++){
      output[i] = input[i] * this.weight
    }
    
    return output
  }
}
