class AddIndexToRides < ActiveRecord::Migration
  def change
    add_index :rides, :name, unique: true
  end
end
