# - Weuse the 'def' keyword to define Ruby methods
# - we use the same naming convention as variables (snake case)
# - Ruby methods always return the last line (expression) in it
# - a & b are called arguments or paramenters
# you can use ! or ? as the last characterof your methd name, they don't
# do anything by themselves. convention is, use ? when the method returns
# true or false and use

def add(a,b)
  a+b
end

puts add(3,4)
puts add(5,7)

# in Ruby you can skip the brackets in most cases

puts add 4,5

# in Ruby, arguments (or paramenters) are required unless you specify a default
# value as in:

def multiply (a, b=1)
  a*b
end

puts multiply 5,6
puts multiply 5
puts multiply 6
