def my_method
  puts "Hello"
  yield if block_given?
  puts "Bye"
end

my_method do
  puts "I'm a block in 'yield'"
  puts "now with 3 lines"
  puts "of strings"
end


my_method { puts "Now, I'm a block of one single line, yet yield!" }

my_lambda = lambda { puts "I'm a lambda" }
my_lambda.call # this will print `I'm a lambda`


my_proc = proc {
  puts "I'm a proc that goes inside the method"
  puts "testing multiple lines block" 
}

def my_method (code)
  puts "Hey you!"
  code.call
  puts "Hello"
end

my_method(my_proc)
