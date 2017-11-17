module HelperMethods
  def random_number
    name.squeeze(' ').capitalize
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
