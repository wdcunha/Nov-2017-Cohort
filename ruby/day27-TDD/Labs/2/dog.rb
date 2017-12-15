class Dog


  def initialize(colour,type)
    @colour, @type = colour, type
    @bones = []
  end

  def give_bone(bone)
    if bone_count < 3
        @bones << bone
    else
        "I have too many bones"
    end
  end

  def eat_bone
      @bones.pop
  end

  def bone_count
    @bones.length
  end

end
