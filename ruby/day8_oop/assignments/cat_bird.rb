# Model the following in Ruby Classes & Objects: The cat catches the bird and eats it
#
# Stretch 1: Use inheritance
#
# Stretch 2: Give the cat and the bird names.
#
# Stretch 3: Make the chances of the cat catching the bird 50%.
#
# Stretch 4: Simulate having 100 cats trying to catch and eat 100 birds.
#
# Stretch 5: Create a module called HelperMethods in a separate file that has a method called `random_number`. Include the module in
# your classes and use the `random_number` method if it makes sense.

#require './animals.rb'
require './cat.rb'
require './bird.rb'

b = Bird.new("B","yellow")
c = Cat.new("Tom","gray")
c.catch(b)
c.random_number("Tom","B")
c.hundred_times



## Gloria code

#require './bird.rb'
#require './cat.rb'

# b1 = Bird.new "B"
# c1 = Cat.new "C"
# c1.catch b1
#
# for i in 1..100
#   bi = Bird.new "B#{i}"
#   ci = Cat.new "C#{i}"
#   ci.catch bi
# end
