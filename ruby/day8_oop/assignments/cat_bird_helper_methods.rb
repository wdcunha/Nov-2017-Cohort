require './animals.rb'

module HelperMethods
  def random_number(cat,bird)
    if rand < 0.5
      p "#{cat} ate the #{bird}!"
    else
      p "the #{bird} run away from the #{cat}!"
    end
  end

  def hundred_times
    for i in 1..100
      random_number("Tom#{i}","B#{i}")
    end
  end
end

# for i in 1..100
#   bi = Bird.new "B#{i}"
#   ci = Cat.new "C#{i}"
#   ci.catch bi


# u      = User.new
# u.name = "tam"
# puts u.name_display
# c      = Car.new
# c.name = "toyota"
# puts c.name_display
