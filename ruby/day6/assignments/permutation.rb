puts "P E R M U T A T I O N \n \n"

letter = []
print 'Enter a caracter: '
letter.push(gets.chomp)

print 'Enter another caracter: '
letter.push(gets.chomp)

print 'Enter the last caracter: '
letter.push(gets.chomp)

new_arr = letter.repeated_permutation(3).to_a
print new_arr
#puts "#{new_arr}"
for i in new_arr
  str = i.join(" ")
  print "#{str}\n"
end
#puts new_arr
