my_cat = {"name" => "grumpy", "job" => "sleeping"}
my_cat.each do |key, value|
  puts "key is #{key} and value is #{value}"
end

puts
puts

my_hash = {"abc" => [1, 2, 3], "xyz" => [4, 5]}
my_hash.each do |key, value|
  puts "key is #{key} and value is #{value}"
end

puts
puts

my_array = ["abc", {"a" => 1, "b" => 2}, false]
my_array.each do |key, value|
  puts "key is #{key} and value is #{value}"
end
