print 'Enter a number of letter in your triangle: '
num = gets.to_i

line = ' '
for i in 1..num
  line += 'O '
  num.times { print " " }
  print line
  print "\n"
  num -= 1
end
