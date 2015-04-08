class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.float :star_rating, null: false
      t.string :title
      t.text :body

      t.timestamps null: false
    end

    add_index :reviews, :user_id
  end
end
