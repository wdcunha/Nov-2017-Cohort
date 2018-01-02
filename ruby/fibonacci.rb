
 n = 11

 new_array = []

 for i in 0..n
   calc = 0
   if i > 1
     new_array << new_array[i-2] + new_array[(i-1)]
   else
     new_array << 1
   end
 end

 p new_array
