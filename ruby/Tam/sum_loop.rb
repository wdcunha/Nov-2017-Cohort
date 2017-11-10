total = 0

loop do
  print 'say a number: '
  number = gets.chomp
  break if number == 'exit'
  total += number.to_f
end

puts "Your total is #{total}"
