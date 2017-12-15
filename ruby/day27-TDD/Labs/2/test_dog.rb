# this will load the autorun feature of minitest which allows us to easily write
# tests by defining methods that start with `test_`
require 'minitest/autorun'
require './dog.rb'

class TestDog < MiniTest::Test

  # all the testing features including running the tests will come by inheriting
  # from MiniTest::Test
  def test_give_bone
    #GIVEN: I have a dog with colour and type
    d = Dog.new("grey","coker")

    #WHEN: I call the give_bone method
    d.give_bone("small")

    # THEN: I get the amount of the bone
    assert_equal(1, d.bone_count)

  end

  def test_give_bone_max
    #GIVEN: I have a dog with colour and type
    d = Dog.new("grey","coker")

    #WHEN: I call the give_bone method;
    d.give_bone("small")
    d.give_bone("large")
    d.give_bone("large")
    result = d.give_bone("medium")

    # THEN: I get the amount of the bone
    assert_equal("I have too many bones", result)
  end


end
