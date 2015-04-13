json.array! @rides do |ride|
  json.id ride.id
  json.name ride.name
  json.average_rating ride.average_rating
  json.image_url ride.image_url
  json.has_rated json.has_rated
end
