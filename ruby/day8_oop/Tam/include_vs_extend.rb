module AwesomeMethods
  def greeting(exp)
    p "Hello World #{exp}!"
  end
end

class Abc
  # include will bring the methods from the module as instance methods so you
  # can call them like this:
  # a = Abc.new
  # a.greeting
  include AwesomeMethods
end

class Xyz
  # extend will bring the methods from the module as class methods so you
  # can call them like this:
  # Xyz.greeting
  extend AwesomeMethods
end


c = Abc.new
c.greeting("John")

Xyz.greeting("Paul")
