json.extract! @ride, :id, :name, :description, :image_url

json.reviews @ride.reviews do |review|
  json.id review.id
  json.star_rating review.star_rating
end
