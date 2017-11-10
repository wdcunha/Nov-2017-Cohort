num = 7.to_i

if num%2 == 0 || num%3 == 0
  if num%2 == 0
    p2 = num**2
    puts "second power of #{num} is #{p2}"
  end
  if num%3 == 0
    p3 = num**(num*3)
    puts "third power of #{num} is #{p3}"
  end
else
  puts "#{num} is not divisible by 2 or 3"
end
