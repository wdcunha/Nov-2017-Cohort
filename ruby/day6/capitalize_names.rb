#buitd an array that contains five names then loop through and capitalize them

arr = ['john', 'mary', 'peter', 'ann', 'joan']

newArr = %w(bill rose richard)

p arr

p newArr

p arr.map { |e| e.capitalize }

p newArr.map(&:capitalize) # This syntax is available since Ruby 1.9
