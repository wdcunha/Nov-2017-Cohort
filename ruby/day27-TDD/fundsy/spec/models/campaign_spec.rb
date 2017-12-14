require 'rails_helper'

# RSpec.describe is used to define a section or group of tests, you can pass to
# a class such as model or controller classes or you can pass it simple strings
# if you set the type such as `type: :model` or `type: :controller` then it
# will give you better integration with Rails models or controllers
RSpec.describe Campaign, type: :model do
  # you can put `pending` on a particular test or a whole `describe` in order
  # to remind you to write the test later
  # pending "add some examples to (or delete) #{__FILE__}"

  describe 'validations' do
    # to define a test example with RSpec we use the RSpec `it` method, you must
    # give it a string that explains what you're testing for.
    it 'requires a title' do
        # GIVEN: new Campaign record
        c = Campaign.new

        # WHEN: we invoke validations
        c.valid?

        # THEN we get an error on the title field

        # to test the outcome of anything in RSpec you use `expect` you can pass
        # any type of object to the result of expect, in this case we're passing
        # a hash of errors that may look like: { title: ['can\'t be blank']}
        # then you can use RSpec `matchers` to test the object that you passed
        # matcher can either test things like equality on inequality and they
        # also test speicfic attributes of the object you're getting back. In our
        # case we are getting a Hash back so we can test whether the hash has
        # a particular key or not. There are many matchers with RSpec and also,
        # Rspec-rails adds many other matchers as well.
        expect(c.errors.messages).to have_key(:title)

      end

      it 'requires a goal of $10 or more' do
        #GIVEN: campaign with goal of $8
        c = Campaign.new({goal: 8})

        #WHEN: we invoke validations
        c.valid?
        #THEN: we get an error  on the goal field
        expect(c.errors.messages).to have_key(:goal)

      end

      it "requires a unique title" do
        # GIVEN: created campaign with a title and a second one with the same
        #        title
        c = Campaign.create!({ title: 'Potato Salad',
                               description: 'Amazing potato',
                               goal: 50_000,
                               end_date: (100.days.from_now)
                              })
        c1 = Campaign.new({ title: 'Potato Salad' })

        # WHEN: We invoke validations
        c1.valid?

        # THEN: we get an error message on title
        expect(c1.errors.messages).to have_key(:title)

      end
  end

  describe '.upcased_title' do
    it 'returns an upcased version of the title' do
      # GIVEN: new campaign with title
      # c = Campaign.new title: 'potato salad'
      c = Campaign.new({ title: 'potato salad' })

      # WHEN: we call the `upcased_title` method
      result = c.upcased_title

      # THEN: We get an upcased version of the upcased_title
      expect(result).to eq('POTATO SALAD')
    end
  end

end
