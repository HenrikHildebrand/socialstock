class ChangeDefaultValueOnRatingForUsers < ActiveRecord::Migration[6.0]
  def change
    change_column_default :users, :rating, 1
  end
end
