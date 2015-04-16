# == Schema Information
#
# Table name: wants
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  ride_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Want < ActiveRecord::Base
  validates :user, :ride, presence: true
  validates :user, uniqueness: { scope: :ride }

  belongs_to :user
  belongs_to :ride
end
