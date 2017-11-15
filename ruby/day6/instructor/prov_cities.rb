my_hash = {
  "BC" => ["Vancouver", "Richmond"],
  "AB" => ["Edmonton", "Calgary"],
  "NB" => ["Moncton", "Bathurst", "Fredericton"]
}

# Print all the keys in the hash above and all the members of the value arrays.
# For example:
# BC: Richmond, Vancouver

my_hash.each do |prov, cities|
  puts "#{prov}: #{cities.join(", ")}"
end
