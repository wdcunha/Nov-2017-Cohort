# Write a hash that stores your personal information

me = {
  "name" => "Steve",
  "address" => "Vancouver",
  "profession" => "Web Dev"
  "skills" => [
    "javascript",
    "running",
    "strategy board games",
    "peeling bananas"
  ]
}

# To access a value associated to a key
me["name"] # return "Steve"

# To write a value to a key
me["name"] = "Steve Godin"
me["height"] = 5.10

# Find a method in the documentation that returns an array of keys and another
# that returns an array of values
me.keys # returns all keys of me hash
me.values # returns all values of me hash


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
