# Write code that takes a sentence then prints it with each word
# capitalized

puts "Enter a sentence"
print "> "

sentence = gets.chomp

cap_sentence = []

sentence.split(" ").each do |word|
  cap_sentence << word.capitalize
end

puts cap_sentence.join(" ")
