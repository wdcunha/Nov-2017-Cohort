class Campaign < ApplicationRecord
  # validates :title, presence: true
  validates :goal, numericality: {greater_than_or_equal_to: 15}
  validates :title, presence: true, uniqueness: true

  def upcased_title
    # title.upcase
    title&.upcase  # '&' inside the line treats the exception and skip the error giving just the value that can be nil (that generate a error for example)
  end
end
