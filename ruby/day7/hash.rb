my_cat = {"name" => "grumpy", "job" => "sleeping"}
my_hash = {"abc" => [1, 2, 3], "xyz" => [4, 5]}
my_array = ["abc", {"a" => 1, "b" => 2}, false]

for i in my_cat
  p i
end

puts
puts "my_cat:"
my_cat.each do |key,value|
  p "Key: #{key} and Value: #{value}"
end
puts
puts "my_hash"
my_hash.each do |key,value|
  p "Key: #{key} and Value: #{value}"
end
puts
puts "my_array"
my_array.each do |key,value|
  p "Key: #{key} and Value: #{value}"
end

puts

h = Hash.new("Go Fish")
h["a"] = 100
h["b"] = 200
p h["a"]           #=> 100
p h["c"]           #=> "Go Fish"
# The following alters the single default object
p h["c"].upcase!   #=> "GO FISH"
p h["d"]           #=> "GO FISH"
p h.keys           #=> ["a", "b"]
puts
# While this creates a new default object each time
h = Hash.new { |hash, key| hash[key] = "Go Fish: #{key}" }
p h["c"]           #=> "Go Fish: c"
p h["c"].upcase!   #=> "GO FISH: C"
p h["d"]           #=> "Go Fish: d"
p h.keys           #=> ["c", "d"]

puts

h1 = { "a" => 1, "c" => 2 }
h2 = { 7 => 35, "c" => 2, "a" => 1 }
h3 = { "a" => 1, "c" => 2, 7 => 35 }
h4 = { "a" => 1, "d" => 2, "f" => 35 }
p h1 == h2   #=> false
p h2 == h3   #=> true
p h3 == h4   #=> false

puts

a = "a"
b = "b".freeze
h = { a => 100, b => 200 }
p h.key(100)
p h.key(100).equal? a #=> false
p h.key(200).equal? b #=> true
p a
p b


puts

h = {"colors"  => ["red", "blue", "green"],
     "letters" => ["a", "b", "c" ]}
p h.assoc("colors")  #=> ["colors"  => ["red", "blue", "green"]]
p h["colors"]
p h.assoc("letters")  #=> ["letters", ["a", "b", "c"]]
p h.assoc("foo")      #=> nil


h = { "a" => 100, "b" => 200 }   #=> {"a"=>100, "b"=>200}
p h
h.clear                          #=> {}
p h
