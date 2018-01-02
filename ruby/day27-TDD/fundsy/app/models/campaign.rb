class Campaign < ApplicationRecord
  belongs_to :user
  # validates :title, presence: true
  validates :title, presence: true, uniqueness: true
  validates :goal, numericality: {greater_than_or_equal_to: 10}

  def upcased_title
    # title.upcase
    title&.upcase  # '&' inside the line treats the exception and skip the error giving just the value that can be nil (that generate a error for example)
  end
end
