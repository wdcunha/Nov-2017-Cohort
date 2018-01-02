# You are given an array with numbers between 1 and 1,000,000. One integer
# is in the array twice. How can you determine which one?
# Can you think of a way to do it using little extra memory?
#
# Bonus: Solve it in two ways: one using hashes and one without.
arr = [1,2,3,3,345,345,234,52,345,234,534,54,3]

hashFreq = {}

arr.each do |num|
  if !hashFreq[num]
    hashFreq[num] = 1
  else
    hashFreq[num] += 1
  end
end

#puts hashFreq

hashFreq.each do |k, v|
  if v == 2
      p "The number that repeate #{v} is #{k}"
  end
end
