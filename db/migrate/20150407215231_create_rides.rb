class CreateRides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.string :name, null: false
      t.text :description
      t.string :image_url

      t.timestamps null: false
    end
  end
end
