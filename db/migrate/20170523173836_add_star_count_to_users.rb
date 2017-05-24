class AddStarCountToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :star_count, :integer, default: 0
  end
end
