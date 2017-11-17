#Ask the user for personal information: first name, last name, city of birth and age. Then store that information in a
#hash. After that loop through the hash and display the results, for example:
#Your first name is Tam.
#Capitalize the inputs from the user if they are capitalizable.

hashStore = {}

print 'Give me your first name: '
hashStore['first name'] = gets.chomp.to_s

print 'Give me your last name: '
hashStore['last name'] = gets.chomp.to_s

print 'Give me your city of birth: '
hashStore['birth city'] = gets.chomp.to_s

print 'Give me your age: '
hashStore['age'] = gets.chomp.to_i

hashStore.each { |key, value| puts "Your #{key} is #{value}" }
