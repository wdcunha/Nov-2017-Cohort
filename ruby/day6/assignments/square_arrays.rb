arr = [[2,3,4], [5,6,7], [6,7,8]]

newArray = []

array_2 = arr.map do |firsLevel|
  firsLevel.map do |num|
    num * num
  end
end
# arr.each do |firstLevel|
#   firstLevel.each do |num|
#     newArray << num * num
#   end
# end
# print arr
# flat_array = [1,2,3,4,5,6]
#
# newArray = flat_array.map do |x|
#   x*x
# end

print newArray
