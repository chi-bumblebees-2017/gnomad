class RemoveStarCount < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :star_count, :integer
  end
end
