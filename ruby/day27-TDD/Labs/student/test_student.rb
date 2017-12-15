# this will load the autorun feature of minitest which allows us to easily write
# tests by defining methods that start with `test_`
require 'minitest/autorun'
require './student.rb'

class TestDog < MiniTest::Test

  # all the testing features including running the tests will come by inheriting
  # from MiniTest::Test
  def test_full_name
    #GIVEN: I have a dog with colour and type
    s = Student.new("Zé","Antonio", 10)

    #WHEN: I call the give_bone method
    r = s.full_name

    # THEN: I get the amount of the bone
    assert_equal("Zé Antônio", r)

  end


end
