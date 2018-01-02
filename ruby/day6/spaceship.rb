# Compares two objects, mostly used to implement the Comparable module.
class Exam
  include Comparable

  def <=>(other)
    self.score <=> other.score
  end
end

Exam.new(score: 100)
Exam.new(score: 50)
#true
[ Exam.new(score: 60), Exam.new(score: 10), Exam.new(score: 30) ].sort
# [<Exam score: 10>, <Exam score: 30>, <Exam score: 60>]
