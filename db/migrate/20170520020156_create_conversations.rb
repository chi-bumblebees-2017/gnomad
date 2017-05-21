class CreateConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :conversations do |t|
      t.integer :initiator_id
      t.integer :receiver_id

      t.timestamps(null: false)
    end

    add_index :conversations, :initiator_id
    add_index :conversations, :receiver_id
    add_index :conversations, [:initiator_id, :receiver_id], unique: true
  end
end
