import random

class Connection:
  def __init__(self, weight):
    self.weight = weight or random.random()
  
  def forward(self, input):
    output = [];
    
    for item in input:
      output.append(item * self.weight)
    
    return output
