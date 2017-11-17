require './bones.rb'
require './dogs.rb'

b1 = Bones.new(11)
b2 = Bones.new(40)
b4 = Bones.new(25)
b5 = Bones.new(5)

d = Dogs.new("Brown","Husk")

d.take_bone b1
d.take_bone b2
d.take_bone b4
d.take_bone b5

d.eat_bone
d.eat_bone
d.eat_bone
