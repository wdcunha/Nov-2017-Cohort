arr = [1, 2, 3]

arr.each do |num|
  puts num
end

# you can also write simple blocks (one-liners) using curly brackets as in:
arr.each {|num| puts num }


# you can write your own method that take in blocks, here are examples:
def greetings
  puts 'Hello'
  yield if block_given? # this executes the block you pass to the method if you
                        # pass one (using `if block_given?` makes giving a
                        # block optional)
  puts 'Goodbye!'
end

greetings

greetings do
  puts '>>>>>'
  puts 'Whats up!'
  puts '>>>>>'
end
