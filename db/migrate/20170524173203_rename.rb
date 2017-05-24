class Rename < ActiveRecord::Migration[5.1]
  def change
    rename_table :blocks_tables, :blocks
  end
end
