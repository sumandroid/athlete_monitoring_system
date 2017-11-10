class AddTypeToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :user_type, :integer , :default => 0, :limit => 1
  end
end
