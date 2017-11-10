print 'Please enter three characters seperated by commas: '
answer = gets.chomp
arr = answer.split(',')
newarray = arr.repeated_permutation(3).to_a # array of permutations

for line in newarray
  string = line.join(" ")
  print "#{string}\n"
end
