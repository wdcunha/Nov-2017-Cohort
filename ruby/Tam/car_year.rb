print 'Give me the year of your car'

car_year = gets.to_i

if car_year > 2017
  puts 'Future'
elsif car_year > 2010
  puts 'New'
elsif car_year > 2000
  puts 'Old'
else
  puts 'Very Old'
end
