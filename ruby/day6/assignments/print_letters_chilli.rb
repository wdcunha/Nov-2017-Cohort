
#puts 'a'.upto('z').to_a

char=65 #
repeat=1
while char <= 90 do
  repeat.times { print char.chr.downcase } #
  print "\n"
  char += 1
  repeat += 1
end
