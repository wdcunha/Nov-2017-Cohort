arr = ['one', 'two', 'three', "carrot", 1, 2, 3]

#adding values
arr.push(false, true, nil)
puts arr
arr.unshift('zero')
puts arr
arr.insert(3,'four')
puts arr

#removing values
arr.delete(3) #delete a value in the given position
puts arr
arr.compact # remove nil values
puts arr
# see DROP command because I didn't have conditions to see it

mult = [[2,5,4], [6,32, 'hey'], ['hello', "You're welcome"]]
puts  mult.length
puts mult.count
puts mult.size

mult.flatten

puts mult

mult.flatten!

puts mult

str = "testing a string to split to an array"
puts str
=> "testing a string to split to an array"
str.split(' ')
puts str
