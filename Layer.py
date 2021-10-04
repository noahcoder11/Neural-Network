from Neuron import Neuron
from Connection import Connection

class Layer:
  def __init__(self, numberOfNeurons, activation, inputLength):
    self.numberOfNeurons = numberOfNeurons
    self.operations = []
    self.inputLength = inputLength
    self.activation = activation
  
  def setup(self):
    for i in range(self.numberOfNeurons):
        connections = []
        for j in range(self.inputLength):
            connections.append(Connection())
        
        self.operations.append({
            'neuron': Neuron(),
            'connections': connections
        })
    
  
  def forward(self, input):
    output = []
    
    for inputItem in input:
        for operation in self.operations:
            c = []
            for connection in operation['connections']:
                c.append(connection.forward(inputItem))
            
            output.append(operation['neuron'].forward(c))
        
    
    return output

