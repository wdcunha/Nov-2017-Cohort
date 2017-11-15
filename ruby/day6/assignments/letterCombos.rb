str = "abcd"

size = str.length-1

comb = str.split(//)

0.upto(size) do |i|
  p i
  comb[i] = comb[i]+comb[i].succ
#  comb.insert(i,str.succ)
  # comb.each { |e|
  #   e+e.succ
  #  }
  #
  # }(i,str.succ)
end
comb.pop
p comb
