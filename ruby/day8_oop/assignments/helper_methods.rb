module HelperMethods
  def random_number
    if rand < 0.5
      p "#{name} ate the #{bird.name}!"
    else
      p "the #{bird.name} run away from the #{name}!"
    end
  end
end

class Car
  attr_accessor :name
  include HelperMethods
end

class User
  attr_accessor :name
  include HelperMethods
end


# u      = User.new
# u.name = "tam"
# puts u.name_display
# c      = Car.new
# c.name = "toyota"
# puts c.name_display
