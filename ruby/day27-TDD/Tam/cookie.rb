class Cookie

  SUGAR_GRAM_CALORIES = 4
  BUTTER_GRAM_CALORIES = 9
  
  def initialize(sugar, butter)
    @sugar, @butter = sugar, butter
  end

  def calorie_count
    result = @sugar * SUGAR_GRAM_CALORIES + @butter * BUTTER_GRAM_CALORIES
  end

end
