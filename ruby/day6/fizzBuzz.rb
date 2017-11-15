arr = []

for i in 1..100
  if i%3 == 0 && i%5 == 0
    arr << "FIZZBUZZ"
  elsif i%3 == 0
    arr << "FIZZ"
  elsif i%5 == 0
    arr << "BUZZ"
  else
    arr << i
  end
end

puts arr
