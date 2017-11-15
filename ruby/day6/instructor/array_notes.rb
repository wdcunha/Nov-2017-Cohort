# Write an arrau that contains three strings and three numbers

a = ["Yo", 604, "Wave", 777, "Carrot! ð¥", 20]

a = ["Yo", 604, "Wave", 777, "Carrot! ð¥", 20, true, false, nil]

# Find out how to get the number of Array elements

c = [1,3,4]
c.count # 3
c.size # 3
c.length # 3

# How to make an multi-dimensional array one-dimensional

d= [[1,2], [3,4]]
d.flatten
d.flatten!

# Find out how to add and remove elements from the end of arrays and
# from the beginning of arrays

e = []

# Add to the end

e << 10
e.push(20)
e.insert(-1, 30)
e.concat([40]) # adds elements of array to end of e

# Remove from the end
e.delete(10)
e.delete_at(-1)
e.pop

# Add to the beginning
e.unshift(90)
e.insert(0, 100)

# Remove from the beginning
e.drop(1)
e.shift

# Find out how to convert a string sentence to an array of words
yo = "Hello CodeCore Students!"
yo.split(" ")


# Iterating over arrays
#
# Build an array that contains 5 numbers then loop through the array and
# print each number multiplied by itself

nums = [1,2,3,4,5]

nums.each do |num|
  puts num * num
end


# Write code that prints every element multiplied by itself in a
# a two-dimensional array

arr2d = [[1,2,3], [4,5,6], [7,8,9]]

arr2d.each do |sub_arr|
  sub_arr.each { |num| puts num * num }
end

arr2d.flatten.each do |num|
  puts num * num
end

# Build an array that contains five names then loop through...

names = ['james', 'steve', 'tam', 'john', 'asia']
capitalized_names = []

names.each do |name|
  puts name.capitalize
  capitalized_names << name.capitalize
end

print names
print capitalized_names
