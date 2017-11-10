print 'Give me the year of your car: '
num = gets.to_i

if num >= 2018
  puts 'future'
elsif num > 2015
  puts 'New one'
elsif num > 2000
  puts 'old'
else
  puts 'Very old!!!'
end
