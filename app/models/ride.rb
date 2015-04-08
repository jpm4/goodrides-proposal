# == Schema Information
#
# Table name: rides
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Ride < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :reviews, dependent: :destroy
end
