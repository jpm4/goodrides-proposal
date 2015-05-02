json.current_user current_user.username

json.array! @rides do |ride|
  json.partial! "api/rides/ride", ride: ride, wants_hash: @wants_hash
end

# json.publishers do |publishersElement|
#   publishersElement.array!(@publishers) do |publisher|
