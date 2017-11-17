# permutating inputs using product
arr = Array.new
for i in 0..2
  print "enter the string #{i+1} to permutate  "
  arr.push(gets.chomp)
end

result=arr.product(arr.product(arr))

for i in 0...result.length
print result[i].flatten.join(' ')
puts
end
