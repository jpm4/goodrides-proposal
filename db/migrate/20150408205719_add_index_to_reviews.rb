class AddIndexToReviews < ActiveRecord::Migration
  def change
    add_index :reviews, :ride_id
  end
end
