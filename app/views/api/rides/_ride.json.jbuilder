json.extract! ride, :id, :name, :average_rating, :image_url, :description
json.has_rated json.has_rated
json.num_wants ride.wants.size
json.want wants_hash[ride.id]
