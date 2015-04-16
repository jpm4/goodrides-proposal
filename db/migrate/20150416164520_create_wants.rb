class CreateWants < ActiveRecord::Migration
  def change
    create_table :wants do |t|
      t.integer :user_id, null: false
      t.integer :ride_id, null: false

      t.timestamps null: false
    end

    add_index :wants, :user_id
    add_index :wants, :ride_id
  end
end
