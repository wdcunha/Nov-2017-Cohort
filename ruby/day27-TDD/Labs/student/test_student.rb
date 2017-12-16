# this will load the autorun feature of minitest which allows us to easily write
# tests by defining methods that start with `test_`
require 'minitest/autorun'
require './student.rb'

class TestDog < MiniTest::Test

  # all the testing features including running the tests will come by inheriting
  # from MiniTest::Test
  def test_full_name
    #GIVEN: I have a dog with colour and type
    s = Student.new("Zé","Antônio", 10)

    #WHEN: I call the give_bone method
    r = s.full_name

    # THEN: I get the amount of the bone
    assert_equal("Zé Antônio", r)

  end

  def test_grade
    #GIVEN: I have an student with name and score
    g = Student.new("Zé","Antônio", 95)

    #WHEN: I call the grade method

    r = g.grade

    # THEN: I get the score
    assert_equal("A", r)

  end

  def test_grade2
    #GIVEN: I have an student with name and score
    g = Student.new("Zé","Antônio", 40)

    #WHEN: I call the grade method

    r = g.grade

    # THEN: I get the score
    assert_equal("E", r)

  end
  def test_grade3
    #GIVEN: I have an student with name and score
    g = Student.new("Zé","Antônio", 50)

    #WHEN: I call the grade method

    r = g.grade

    # THEN: I get the score
    assert_equal("D", r)

  end
  def test_grade4
    #GIVEN: I have an student with name and score
    g = Student.new("Zé","Antônio", 60)

    #WHEN: I call the grade method

    r = g.grade

    # THEN: I get the score
    assert_equal("C", r)

  end
  def test_grade5
    #GIVEN: I have an student with name and score
    g = Student.new("Zé","Antônio", 70)

    #WHEN: I call the grade method

    r = g.grade

    # THEN: I get the score
    assert_equal("B", r)

  end
  def test_grade6
    #GIVEN: I have an student with name and score
    g = Student.new("Zé","Antônio", 30)

    #WHEN: I call the grade method

    r = g.grade

    # THEN: I get the score
    assert_equal("F", r)

  end

end
