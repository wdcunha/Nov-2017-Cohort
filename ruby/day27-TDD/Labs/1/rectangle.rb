class Rectangle

  TWICE = 2
  def initialize(height, width)
    @height, @width = height, width
  end

  def area
    @height * @width
  end

  def is_square?
    # if height == width
    #   true
    # else
    #   false
    # end
    @height == @width
  end

  def perimeter
        @height*TWICE + @width*TWICE
  end

end
