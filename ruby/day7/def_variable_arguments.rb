def multiply(a, *b)
  p "Starst here"
  result = a
  p "a ---> #{a}"
  p "b ---> #{b}"
  b.each {|x| result *= x}
  p "Ends here"
  result
end

puts multiply(4, 5, 5, 4, 5)
puts multiply(10, 4, 4)
