str = "We will test right now how many times a word appear in a text, what we can do using an array spliting words from
a string and then looping in whole text to see what is the frequence in which it appears"

which = ''

arr = str.downcase.split(' ')
p arr

hashCount = {}

arr.each do |word|

  if(!hashCount[word])
    hashCount[word] = 1
    #hashVar[word.to_sym] = word.length #ellegant way to do the same above
  else
    hashCount[word] += 1
  end
end

print hashCount

#Tam
# arr = str.downcase.split(' ')
#
# hashCount = Hash.new(0)
#
# arr.each do |word|
#
#   if(!hashCount[word])
#     hashCount[word] += 1
#     #hashVar[word.to_sym] = word.length #ellegant way to do the same above
#   else
#     hashCount[word] += 1
#   end
# end
#
# print hashCount
