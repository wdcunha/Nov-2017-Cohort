def by_five?(a)
  if a%5 == 0
    true #result =  true
  else
    false #result = false
  end
end
p by_five 45

# better way to write the code above
def by_five2?(a)
  a%5 == 0
end
p by_five2 45
