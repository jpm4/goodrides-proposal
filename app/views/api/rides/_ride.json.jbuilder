json.extract! ride, :id, :name, :average_rating, :image_url
# json.name ride.name
# json.average_rating ride.average_rating
# json.image_url ride.image_url
json.has_rated json.has_rated
json.num_wants ride.wants.size
json.want wants_hash[ride.id]
