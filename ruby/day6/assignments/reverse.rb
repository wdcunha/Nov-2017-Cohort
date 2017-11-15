greeting = "hello"

#puts greeting.reverse # olleh
size = greeting.length-1

outcome = ""

# while size >= 0
#   outcome << greeting[size].split(" ")
#   #p greeting[size]
#   size -= 1
# end

size.downto(0) do |i|
  outcome << greeting[i]
  #p greeting[i]
end

puts outcome
