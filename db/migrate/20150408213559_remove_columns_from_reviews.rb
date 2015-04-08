class RemoveColumnsFromReviews < ActiveRecord::Migration
  def change
    remove_column :reviews, :review_group_id
    remove_column :reviews, :review_group_type
  end
end
