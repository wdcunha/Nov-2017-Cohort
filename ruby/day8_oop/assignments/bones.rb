# Make two classes dog and bones. The dog class must have an initialize method that takes dog's colour and type. The bone must have
# an initialize method that assigns a size for the bone.
#https://codecore.certified.in/learning_modules/lab-dogs-bones-11/submissions
# The dog class must have a give method that takes a bone object and adds it to an array of bones for the dog. The dog can take a
# maximum of three bones so if you give it more than three it will will print, I have too many bones.
#
# The dog class must have an eat bone method so that when you call it it removes a bone from the array of bones and prints "yummy!
# I ate 'big' bone" the 'big' part comes from the size attribute of bone.

class Bones

  def initialize(size)
    @size = size
  end

end
