# json.partial! 'reviews/review'
json.extract! @review, :id, :ride_id, :star_rating, :user_id, :body
json.name @review.user.username
