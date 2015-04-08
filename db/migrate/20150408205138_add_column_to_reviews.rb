class AddColumnToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :ride_id, :integer, null: false
  end
end
