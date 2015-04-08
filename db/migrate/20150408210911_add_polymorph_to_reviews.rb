class AddPolymorphToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :review_group_id, :integer, index: true
    add_column :reviews, :review_group_type, :string
  end
end
