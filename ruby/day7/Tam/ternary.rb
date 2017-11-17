print 'Give me a number: '
number = gets.to_f

if number > 100
  puts 'The number is big'
else
  puts 'The number is small'
end

# this can be condensed using the ternary operator
puts number > 100 ? 'The number is big' : 'The number is small'
