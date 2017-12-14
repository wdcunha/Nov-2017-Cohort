class Rectangle


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

end
