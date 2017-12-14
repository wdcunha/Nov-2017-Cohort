# this will load the autorun feature of minitest which allows us to easily write
# tests by defining methods that start with `test_`
require 'minitest/autorun'
require './cookie.rb'

class TestCookie < MiniTest::Test

  # all the testing features including running the tests will come by inheriting
  # from MiniTest::Test
  def test_calories_count
    #GIVEN: I have a cookie object with a sugar and butter amounts
    c = Cookie.new(10,20)

    #WHEN: I call the `calorie_count` method
    result = c.calorie_count


    # THEN: I get the correct calculated amount
    # assert_equal will make the test pass if the two arguments you give it are
    # equal and it will make the test fail if they are not
    assert_equal(220, result)

  end

end
