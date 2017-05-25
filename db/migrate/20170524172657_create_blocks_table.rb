class CreateBlocksTable < ActiveRecord::Migration[5.1]
  def change
    create_table :blocks_tables do |t|
      t.integer :blocked_user_id, null: false
      t.integer :reporting_user_id, null: false

      t.timestamps(null: false)
    end
  end
end
