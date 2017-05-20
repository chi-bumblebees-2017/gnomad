class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :name
      t.string :image_url
      t.string :email
      t.string :home_city
      t.string :home_state
      t.text :bio

      t.timestamps(null: false)
    end
  end
end
