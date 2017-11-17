
print 'How many sides does a hexagon have?

1- five
2- six
3- seven

Enter the correct number:'
num = gets.chomp
count = 0.to_f
if num == "7"
  puts 'You got it!
  '
  count += 1;
else
  puts "Ow bad, you got wrong!
  let's try next!
  "
end

print 'How many sides does a triangle have?

1- five
2- three
3- seven

Enter the correct number:'

num = gets.chomp
if num == "3"
  puts "That's right!
  "
  count += 1;
else
  puts "Ow bad, you got mistaken!
  let's try next!
  "
end

print 'How many sides does a losango have?

1- four
2- three
3- seven

Enter the correct number:'

num = gets.chomp
if num == "4"
  puts "That's right!
  "
  count += 1;
else
  puts "Ow bad, you got mistaken!
  "
end

puts "You scored #{(count/3)*100}% of #{count} of 3 questions correctly!"
