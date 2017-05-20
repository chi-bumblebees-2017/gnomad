class CreatePersonalMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :personal_messages do |t|
      t.text :body
      t.integer :author_id
      t.references :conversation

      t.timestamps(null: false)
    end
  end
end
