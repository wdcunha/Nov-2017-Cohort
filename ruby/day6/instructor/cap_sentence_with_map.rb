# Write code that takes a sentence then prints it with each word
# capitalized using map

puts "Enter a sentence"
print "> "

result =  gets.chomp.split(" ").map { |word| word.capitalize }.join(" ")

puts result
