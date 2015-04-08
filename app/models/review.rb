# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  star_rating :float            not null
#  title       :string
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  ride_id     :integer          not null
#

class Review < ActiveRecord::Base
  validates :user_id, :ride_id, :star_rating, presence: true

  belongs_to :user
  belongs_to :ride
end
