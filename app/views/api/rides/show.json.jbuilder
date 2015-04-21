json.partial! "api/rides/ride", ride: @ride, wants_hash: @wants_hash

# json.extract! @ride, :id, :name, :description, :image_url

json.(@reviewed, :reviewed)
json.(@user_rating, :user_rating)
json.current_user current_user.id

json.reviews @ride.reviews do |review|
  json.id review.id
  json.user_id review.user_id
  json.star_rating review.star_rating
  json.body review.body
  json.name review.user.username
  json.updated_at review.updated_at
end
