# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  star_rating :float            not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  ride_id     :integer          not null
#

class Review < ActiveRecord::Base
  validates :user_id, :ride_id, presence: true
  validates :star_rating, numericality: {
    greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }

  belongs_to :user
  belongs_to :ride
end
