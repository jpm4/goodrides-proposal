json.extract! @ride, :id, :name, :description, :image_url

json.(@reviewed, :reviewed)
json.(@user_rating, :user_rating)

json.reviews @ride.reviews do |review|
  json.id review.id
  json.star_rating review.star_rating
  json.body review.body
  json.name review.user.username
  json.updated_at review.updated_at
end
