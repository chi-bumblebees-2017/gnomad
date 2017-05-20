class CreateConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :conversations do |t|
      t.integer :initiator_id
      t.integer :receiver_id

      t.timestamps(null: false)
    end
  end
end
