puts "Enter a sentence"
print "> "

sentence = gets.chomp

p sentence.split(' ').map { |e| e.capitalize }

p sentence.split(' ').map(&:capitalize) # This syntax is available since Ruby 1.9
