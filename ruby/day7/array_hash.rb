arr = ["hello", "greetings", "hola", "hi"]

hashVar = {}

arr.each do |word|
  #hashVar[:"#{word}"] = word.length
  hashVar[word.to_sym] = word.length #ellegant way to do the same above
end

print hashVar
