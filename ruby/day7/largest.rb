arr = [1,2,3,3,345,345,234,52,345,234,534,54,3]

def largest(*numbers)
  numbers.max
end

puts largest 6,23,4,2
puts arr.max
puts largest 1, 2, 3,3 ,345,345,234,52,345,234,534,54,3
puts largest 3, 9, 13
puts largest 3, 5
