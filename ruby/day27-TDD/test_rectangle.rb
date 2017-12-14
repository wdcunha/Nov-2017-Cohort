# this will load the autorun feature of minitest which allows us to easily write
# tests by defining methods that start with `test_`
require 'minitest/autorun'
require './rectangle.rb'

class TestRectangle < MiniTest::Test

  # all the testing features including running the tests will come by inheriting
  # from MiniTest::Test
  def test_area
    #GIVEN: I have a cookie object with a sugar and butter amounts
    a = Rectangle.new(10,10)

    #WHEN: I call the `calorie_count` method
    result = a.area

    # THEN: I get the correct calculated amount
    # assert_equal will make the test pass if the two arguments you give it are
    # equal and it will make the test fail if they are not
    assert_equal(100, result)

  end

  def test_is_square?
    i = Rectangle.new(10,10)

    result = i.is_square?
    assert_equal(true, result)

  end

  def test_is_square_2
    i = Rectangle.new(30,10)

    result = i.is_square?
    assert_equal(false, result)

  end

end
