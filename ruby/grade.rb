print 'Give me your score: '
num = gets.to_i

if num >= 8
  puts 'A'
elsif num > 6
  puts 'B'
elsif num > 4
  puts 'C'
else
  puts 'D'
end
