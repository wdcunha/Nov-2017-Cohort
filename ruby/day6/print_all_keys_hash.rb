my_hash = {
  'BC' => ['Vancouver', 'Richmond'],
  'AB' => ['Edmonton', 'Calgary']
  }

my_hash.each do |prov, cities|
  puts "#{prov}: #{cities.join(",")}"
end

my_hash.each_key do |key|
  puts key
end

# Ratings
my_hash.each do |key, value|
  puts value
end

my_hash.each_value do |val|
  puts val
end
