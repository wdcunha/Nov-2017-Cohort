# print each element from the array myltiplied by itself

arr2d = [[1,2,3], [4,5,6], [7,8,9]]

puts

arr2d.each do |sub_arr|
  sub_arr.each { |num| print num * num }
end

puts

arr2d.flatten.each do |num|
  print num * num
end

puts 
