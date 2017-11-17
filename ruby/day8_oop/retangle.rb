class retangle

  def initialize(width, height)
    @width, @height = width, height
  end

  def area
    s = @width*@height
  end

  def is_square?
    if @width == @height
      "It's a square!!"
    end
end
