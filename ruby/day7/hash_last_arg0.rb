def my_method(a, b = {})
  puts "a is #{a}"
  b.each do |k, v|
    puts "Key is #{k} and value is #{v}"
  end
end

my_method('Hello', { a: 1, b: 2, c: 3})
# brackets are optional in Ruby
my_method 'Hello', { a: 1, b: 2, c: 3}
# if the last argument is a Hash then you can omit the curly brackets for that
# argument
my_method 'Hello', a: 1, b: 2, c: 3
