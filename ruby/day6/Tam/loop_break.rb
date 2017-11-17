loop do
  print 'Say a word: '
  word = gets.chomp
  break if word == 'exit'
  puts "You said: #{word}"
end
