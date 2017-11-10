class CreateUserScores < ActiveRecord::Migration[5.0]
  def change
    create_table :user_scores do |t|
      t.integer  :user_id
      t.string   :assessment
      t.string   :aspect
      t.integer  :score
      t.datetime :assessment_date
      t.timestamps
    end
  end
end
