print 'Enter a number: '
num = gets.to_i

def isPrime(x)
  for i in 2..(x-1)
    if x%i == 0
      return false
    end
  end
  return true
end

print "Your number #{num} is #{isPrime(num)} for prime \n"
