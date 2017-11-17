# Implement a `pluck` method, which takes an array of hashes and a key name, and returns an array containing the values for each
# named key in the hash.
#
# For example:
#
# pluck([{a:1}, {a:2}], :a)  ## returns [1,2]
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]
# If an hash is missing the property, you should just leave it as nil in the output array.
#
# http://www.codewars.com/dojo/katas/530017aac7c0f49926000084

hashArr = [{c:4},{a:1}, {a:2}, {d:6}] #[{b:2}, {a:4, b:4}, {a:1}, {c:4}] #, '':b}
#hashArr = [[{b:2}, {a:4, b:4}, {a:1}, {c:4}], "a"] #[{b:2}, {a:4, b:4}, {a:1}, {c:4}] #, '':b}
k = 'a'.to_sym

#hashArr.each {|key, value| print "#{key} = #{value}" }
#hashLetter.each { |key, value| p "#{key} = #{value}" }

def pluck(array, key)
  arr = []
  array.each do |hash|
    if hash[key]
      arr << hash[key]
    else
      arr << nil
    end
  end
  return arr
end

p pluck(hashArr, k)
