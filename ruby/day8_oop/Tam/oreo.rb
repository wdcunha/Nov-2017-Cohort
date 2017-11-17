require './cookie.rb'

# here the class `Oreo` inherits from the Cookie class which means Oreo will
# have access to all methods and varibles: public, private, class, instance..etc
# we call Cookie the parent class or superclass
# we call Oreo the child class or subclass
class Oreo < Cookie
  attr_accessor :filling_type

  # by defining a method with the same name as a method in the parent class we
  # are `overriding` the method which means we are redefining the method just
  # for instances of the `Oreo` class
  def details
    # using the `super` keyword we're calling a method with the same name in
    # the superclass (or parent class), in this case we are calling the
    # `details` method in the `Cookie` class
    p super
    p "This is a #{filling_type} Oreo cookie."
  end
end
