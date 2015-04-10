json.extract! @ride, :id, :name, :description, :image_url

json.reviews @ride.reviews do |review|
  json.id review.id
  json.star_rating review.star_rating
  json.title review.title
  json.body review.body
  json.user review.user.username
  json.updated_at review.updated_at
end
