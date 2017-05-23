class CreateStars < ActiveRecord::Migration[5.1]
  def change
    create_table :stars do |t|
      t.integer :sender_id, null: false
      t.integer :recipient_id, null: false

      t.timestamps(null: false)
    end
  end
end
