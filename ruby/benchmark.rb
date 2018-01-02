require 'benchmark'


array = [1,2,3,4,5,6,7,8,9,10]

p array

array.push(11)
array.push(12)
array.push(13)

p array

array2 = [1,2,3,4,5,6,7,8,9,10]

p array2

array2.insert(2, 11)
array2.insert(2, 12)
array2.insert(2, 13)

p array2

 n = 10000000

 # Run 1
 Benchmark.bm do |x|
   x.report do
     n.times do
       array = [1,2,3,4,5,6,7,8,9,10]
       array.push(11)
       array.push(12)
       array.push(13)
     end
   end
 end

 # Run 2
 Benchmark.bm do |x|
   x.report do
     n.times do
       array = [1,2,3,4,5,6,7,8,9,10]
       array.insert(2, 11)
       array.insert(2, 12)
       array.insert(2, 13)
     end
   end
 end
