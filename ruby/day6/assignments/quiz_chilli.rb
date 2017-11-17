correct = 0
wrong = 0
total = 3
print "How many sides does a hexagon have?
1 - five
2 - six
3 - seven\n"
answer1 = gets.to_i
if answer1 == 2
  correct += 1
else
  wrong += 1
end
print "How many sides does a triangle have?
1 - three
2 - four
3 - five\n"
answer2 = gets.to_i
if answer2 == 1
  correct += 1
else
  wrong += 1
end
print "How many sides does an octagon have?
1 - six
2 - seven
3 - eight\n"
answer3 = gets.to_i
if answer3 == 3
  correct += 1
else
  wrong += 1
end
print "You scored #{correct/total*100}\%, you got #{correct} out of 3 questions correctly!"
