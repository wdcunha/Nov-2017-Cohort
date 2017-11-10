calc = 0 # if don't put here, the code won't work
loop do
  print 'Give a number: '
  word = gets.chomp
  break if word == 'exit'
  conv = word.to_f
  calc += conv
  puts "You said: #{word}"
end
puts calc
