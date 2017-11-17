print 'Enter a word: '
str = gets.to_s
swp = str.swapcase.split('')
dwn = str.downcase
up  = str.upcase
cap = str.capitalize
#tit = str.titleize

puts "swapcase #{swp}"
puts "downcase #{dwn}"
puts "upcase #{up}"
puts "capitalize #{cap}"
#puts "titlelize #{tit}"
