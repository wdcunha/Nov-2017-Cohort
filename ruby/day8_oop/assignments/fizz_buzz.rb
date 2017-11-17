# Build a class called FizzBuzz that takes two numbers as parameters and then have a method called run that returns a fizzbuzz array
# (numbers from 1 to 100, numbers divisible by the first number replaced by 'fizz' and numbers divisible by the second number
# replaced by 'buzz' and numbers divisible by both replaced by 'fizzbuzz'). For instance this code should work with your class:
#
# fb = FizzBuzz.new(3,5)
# fb.run # returns an array like: [1, 2, 'fizz', 4, 'buzz, ...
# Now modify your solution to make it flexible and be able to change the numbers after you create the object. For instance:
#
# fb = FizzBuzz.new(3,5)
# fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
# fb.first_number = 2
# fb.second_number = 3
# fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...

class FizzBuzz

  attr_accessor :num1
  attr_accessor :num2

  def initialize(num1,num2)
    @num1, @num2 = num1, num2
  end

  def run
    fizzbuzz = []
    counter = 1
    while (counter <=100)
      if counter%num1 == 0 && counter%num2 == 0
        fizzbuzz << 'fizzbuzz'
      elsif counter%num1 == 0
        fizzbuzz << 'fizz'
      elsif counter%num2 == 0
        fizzbuzz << 'buzz'
      else
        fizzbuzz << counter
      end
      counter += 1
    end
    print fizzbuzz
  end

end
