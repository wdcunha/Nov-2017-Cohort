class Student

  def initialize(first_name, last_name, score)
    @first_name, @last_name, @score = first_name, last_name, score

  end

  def full_name
    @full_name = "#{@first_name} #{@last_name}"
  end

  def grade
    if @score > 90
      "A"
    elsif @score > 65
      "B"
    elsif @score > 55
      "C"
    elsif @score > 45
      "D"
    elsif @score > 35
      "E"
    else
      "F"
    end
  end

end
