json.array! @rides do |ride|
  json.partial! "api/rides/ride", ride: ride, wants_hash: @wants_hash
end
