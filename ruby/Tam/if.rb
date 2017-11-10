print 'Give me a number between 0 and 100'
num = gets.to_i

if num > 80
  puts 'The number is large'
elsif num > 50
  puts 'The number is big'
elsif num > 30
  puts 'The number is medium'
else
  puts 'The number is small'
end
