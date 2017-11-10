print 'Give me a number 1 to 10: '
num = gets.to_i

if num == 9
puts 'You got the lucky number'
end

puts 'You got the lucky number' if num == 9

puts 'You got an unlucky number' unless num == 9
