#Given an array of number such as:
#Write a piece of code that will generate a hash of frequencies that looks like:
#{1 => 1, 2 => 2, 3 => 4, 4 => 3}
#Stretch: Attempt to do the exercise in one line of code using methods like `each_with_object`.

arr = [1,2,3,4,4,4,2,3,3,3]

hashFreq = {}

arr.each do |num|
  if !hashFreq[num]
    hashFreq[num] = 1
  else
    hashFreq[num] += 1
  end
end

puts hashFreq
