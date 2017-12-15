
# t.string "title"
# t.text "description"
# t.integer "goal"
# t.datetime "end_date"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false

# Factories must ALWAYS generate models that pass all validations!
FactoryBot.define do
  factory :campaign do
    # title "Test"
    # title { Faker::ChuckNorris.fact }
    # sequence(:title) { Faker::ChuckNorris.fact } #concatinating the number with the title

    # Use the sequence method with attributes that must be unique
    # The sequence takes an attribute and a block. The block
    # will receive a number as argument that is current count
    # of how many times the factory was called.
    sequence(:title) { |n| "#{Faker::ChuckNorris.fact} - #{n}" } #concatinating the number with the title
    # description "My description"
    description { Faker::Lorem.paragraph }
    # goal 20000
    goal { 10 + rand(1000000) }
    # end_date 20.days.from_now
    end_date { Time.now + rand(30..120).days }

  end
end
