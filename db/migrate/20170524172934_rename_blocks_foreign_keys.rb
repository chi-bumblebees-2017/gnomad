class RenameBlocksForeignKeys < ActiveRecord::Migration[5.1]
  def change
    rename_column :blocks_tables, :blocked_user_id, :offender_id
    rename_column :blocks_tables, :reporting_user_id, :reporter_id
  end
end
