#Find the most recurring letter in a given string from the user.

str = "We will test right now how many times a word appear in a text, what we can do using an array spliting words from
a string and then looping in whole text to see what is the frequence in which it appears"

letters = str.gsub(/([,.!?\s])/,'').downcase.split('')

  hashLetter = {}

letters.each do |word|
  if !hashLetter[word]
      hashLetter[word] = 1
  else
    hashLetter[word] += 1
  end
end

max = hashLetter.sort

arr = []
hashLetter.each { |key, value| arr << value }
hashLetter.each { |key, value| p "#{key} = #{value}" }

def mostRec(times)
  times.max
end

hashLetter.each do |key, value|
  if mostRec(arr) == value
     puts "The most recurring letter is #{key} that appeared #{value}"
  end
end


#puts mostRec(arr)
#puts mostRec(hashLetter)

#puts hashLetter

### shaun code
# sort = hash.sort_by {|letter, num| num }
# p sort[hash.length - 1]
