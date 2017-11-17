# - We use the `def` keyword to define Ruby methods
# - We use the same naming convention as variables (snake case)
# - Ruby methods always return the last line (expression) in it
# - a & b are called arguments or parameters
# - You can use ! or ? as the last character of your method name, they don't
#   do anything by them selves. Convention is, use ? when the method returns
#   true or false and use ! when the method may do something destructive such
#   as mutating an object
def add(a, b)
  a + b
end

puts add(3, 4)
puts add(5, 7)

# in Ruby you can skip the brackets in most cases
puts add 4, 5

# in Ruby, arguments (or parameters) are required unless you specify a default
# value as in:
def multiply(a, b = 1)
  a * b
end

puts multiply 5, 6
puts multiply 5
puts multiply 6

def greeting(name = 'Anonymous')
  # puts "Hello #{name}" # this will return nil
  "Hello #{name}"
end


def power_it(a, b)
  a ** b
end

def by_five?(number)
  if number % 5 == 0
    result = true
  else
    result = false
  end
  result
end

def by_five?(number)
  if number % 5 == 0
    true
  else
    false
  end
end

def by_five?(number)
  number % 5 == 0
end

# - we use * to take variable number of arguments which will come as an Array
def multiply(*numbers)
  result = 1
  numbers.each do |num|
    result *= num
  end
  result
end

puts multiply 1, 2, 3
puts multiply 1, 2, 3,3 ,345,345,234,52,345,234,534,54,3
puts multiply

def largest(*numbers)
  numbers.max
end

puts largest 6,23,4,2
puts largest
puts largest 3
puts largest 3, 5
