# - we use * to take variable number of arguments which will come as an Array
def largest(*numbers)
  numbers.max
end

puts largest 1, 2, 3
puts largest 1, 2, 3,3 ,345,345,234,52,345,234,534,54,3
puts largest 55, 40, 3, 1
