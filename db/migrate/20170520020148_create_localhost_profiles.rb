class CreateLocalhostProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :localhost_profiles do |t|
      t.references :user
      t.boolean :available
      t.text :suggestions
      t.boolean :restaurants
      t.boolean :sports
      t.boolean :museums
      t.boolean :bars
      t.boolean :music
      t.boolean :outdoors
      t.boolean :art
      t.boolean :fitness
      t.boolean :history
      t.boolean :architecture
      t.boolean :family_fun
      t.boolean :zoo
      t.boolean :culture
      t.boolean :volunteer
      t.boolean :shopping

      t.timestamps(null: false)
    end
  end
end
