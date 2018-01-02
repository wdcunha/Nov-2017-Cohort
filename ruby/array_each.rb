 my_array = [1, 5, 6, 7]
 y = []
 puts y
 my_array.each do  |x|
   y << x * 2
   p y
 end

 new_array = my_array.map { |e| e * e }

 p new_array
