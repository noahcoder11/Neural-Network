import random

class Neuron:
  def __init__(self, bias):
    self.bias = bias or random.random()
  
  def forward(self, input):
    output = []
    
    for inputRow in input:
        n = 0
        for inputItem in inputRow:
            n += inputItem + self.bias

        output.append(n)
    
    return output
