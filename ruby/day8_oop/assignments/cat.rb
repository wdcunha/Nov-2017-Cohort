# Build a class Animal that has two methods: "eat" that prints "I'm eating" and "walk" that prints "I'm walking". Make the class have
# two attribute accessors: name and color. Make the initialize method set those two variables.
#
# Now build a class called Dog that inherits from the Animal class. Add a new method to this class called bark that returns woof.
# Override the eat methods and make it print whatever the Animal class eat method prints and then print "Bones are yummy!".
#
# Now build a class called Cat that inherits from the Animal class. Override the eat methods and make it print "Fish is yummy!".
require './animals.rb'
require './cat_bird_helper_methods.rb'

class Cat < Animal
include HelperMethods

  def eat
    "#{name} ate the #{bird}!"
  end

  def catch(bird)
    (1..100).each do |num|
      if [true,false].sample
        p "#{name} ate the #{bird.name}!"
      else
        p "the #{bird.name} run away from the #{name}!"
      end
    end
  end

end
