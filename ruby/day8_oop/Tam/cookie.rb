# - we define a class in Ruby using the `class` keyword
# - class names are constants which means the name should start with a capital
#   letter
# - The convention is to use CamelCase for naming classes
# - The convention is to name the file with snake_case version of the class name
# - A best practice is to keep one class in one file
# When using Pry you can load a file by doing:
# `load './cookie.rb'` or `require './cookie.rb'`
# require will not load the file if it has been `required` or loaded already.
# this is useful when you have a big project so if the file is loaded once no
# need to reload it again.
# `load` is useful when you developing and making lots of changes to the file
# then it will force loading the file even if it's been previously loaded.
# to create an object (or instance) from a class we use:
# `c = Cookie.new`
# Objects are instances of classes
class Cookie

  def initialize(sugar, butter)
    @sugar = sugar
    @butter = butter
    p 'Creating a Cookie object'
  end

  # def sugar
  #   @sugar
  # end
  # the line belowÂ ð is equivalent to the method above ð
  attr_reader :sugar

  # def set_sugar(new_amount)
  #   @sugar = new_amount
  # end

  # the `=` at the end of the method changes the way the method works, we're
  # now able to call the method as in:
  # c = Cookie.new 5, 6
  # c.sugar = 12
  # def sugar=(new_amount)
  #   @sugar = new_amount
  # end
  # the line belowÂ ð is equivalent to the method above ð
  attr_writer :sugar

  attr_accessor :flour
  # is equivalent to:
  # attr_reader :flour
  # attr_writer :flour

  def details
    "This cookie has #{@sugar}g of sugar and #{@butter}g of butter"
  end

  # The `eat` method below ð is conisdered a `public` `instance` method which
  # means, you can call the method from outside the class (public) and it means
  # that you call the method on object (or instances)
  def eat
    "Eating the Cookie that was baked for #{@t} minutes"
  end

  def bake_and_eat(time)
    # you define instance variables by putting an `@` sign before ther variable
    # name. You can define an instance variable anywhere. If you haven't set
    # the variable before it will automatically be defined as `nil` and it
    # won't give you `undefined varible or method` error
    @t = time
    p bake(time)
    p eat
    'Baked and ate the cookie'
  end

  # def Cookie.info
  #   'This is the Cookie class'
  # end

  # the method below is defined as `class` method which means that you can call
  # that method directly on the class and not on an instance (object) of that
  # class:
  # Cookie.info
  # Cookie.new.info # this will give you an `undefined method` error
  def self.info
    'This is the Cookie class'
  end

  # all methods defined after the `private` keyword are considered private
  # methods
  private

  # private methods can be called from other public or private methods defined
  # within this class (in this case Cookie)
  def bake(time)
    "Baking the cookie for #{time} minutes"
  end

end
