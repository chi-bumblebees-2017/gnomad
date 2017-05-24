# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170523173836) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.integer "initiator_id"
    t.integer "receiver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["initiator_id", "receiver_id"], name: "index_conversations_on_initiator_id_and_receiver_id", unique: true
    t.index ["initiator_id"], name: "index_conversations_on_initiator_id"
    t.index ["receiver_id"], name: "index_conversations_on_receiver_id"
  end

  create_table "gnomad_profiles", force: :cascade do |t|
    t.bigint "user_id"
    t.boolean "restaurants"
    t.boolean "sports"
    t.boolean "museums"
    t.boolean "bars"
    t.boolean "music"
    t.boolean "outdoors"
    t.boolean "art"
    t.boolean "fitness"
    t.boolean "history"
    t.boolean "architecture"
    t.boolean "family_fun"
    t.boolean "zoo"
    t.boolean "culture"
    t.boolean "volunteer"
    t.boolean "shopping"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_gnomad_profiles_on_user_id"
  end

  create_table "localhost_profiles", force: :cascade do |t|
    t.bigint "user_id"
    t.boolean "available"
    t.text "suggestions"
    t.boolean "restaurants"
    t.boolean "sports"
    t.boolean "museums"
    t.boolean "bars"
    t.boolean "music"
    t.boolean "outdoors"
    t.boolean "art"
    t.boolean "fitness"
    t.boolean "history"
    t.boolean "architecture"
    t.boolean "family_fun"
    t.boolean "zoo"
    t.boolean "culture"
    t.boolean "volunteer"
    t.boolean "shopping"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_localhost_profiles_on_user_id"
  end

  create_table "personal_messages", force: :cascade do |t|
    t.text "body"
    t.integer "author_id"
    t.bigint "conversation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conversation_id"], name: "index_personal_messages_on_conversation_id"
  end

  create_table "stars", force: :cascade do |t|
    t.integer "sender_id", null: false
    t.integer "recipient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", null: false
    t.string "uid", null: false
    t.string "image_url"
    t.string "email"
    t.string "home_city"
    t.string "home_state"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "star_count", default: 0
  end

end
