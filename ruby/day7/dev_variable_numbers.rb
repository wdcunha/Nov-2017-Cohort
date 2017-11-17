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
