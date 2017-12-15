class Student

  def initialize(first_name, last_name, score)
    @first_name, @last_name, @score = first_name, last_name, score

  end

  def full_name
    @full_name = "#{@first_name} #{@last_name}"
  end

end
