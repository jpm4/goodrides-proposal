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
  has_many :wants, counter_cache: true, dependent: :destroy
  has_many :wanters, through: :wants, source: :user

  def average_rating
    return 0 if self.reviews.empty?
    sum = 0
    self.reviews.each do |review|
      sum += review.star_rating
    end
    (sum / self.reviews.count).round(2)
  end

  def wanted_by?(user)
    wants.exists?(user_id: user.id)
  end
end
