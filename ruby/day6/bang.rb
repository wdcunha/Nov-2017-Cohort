# modify in-place
y = [3, 5, 2]
x = y.sort
p "x is y sorted: #{x}, but y is still: #{y}"
# => "x is y sorted: [2, 3, 5], but y is still: [3, 5, 2]"

y.sort!
p "y is now sorted in-place: #{y}"
#  => "y sorted in-place: [2, 3, 5]"

p y
