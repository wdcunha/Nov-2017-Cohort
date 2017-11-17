argument = "Well"

p `Hello #{argument}`

def greetings(argument = "Test")
  puts `Hello #{argument}` # it will return nil
  p `Hello #{argument}`
end

greetings "Well"
