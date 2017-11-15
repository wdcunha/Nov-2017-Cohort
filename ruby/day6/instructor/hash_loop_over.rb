ratings = {
  "Vancouver" => 10,
  "Richmond" => 8,
  "Burnaby" => 7
}
# Loop over the hash above and print the city names only then loop again and
# print ratings only

# City names
ratings.each do |key, value|
  puts key
end

ratings.each_key do |key|
  puts key
end

# Ratings
ratings.each do |key, value|
  puts value
end

ratings.each_value do |val|
  puts val
end
