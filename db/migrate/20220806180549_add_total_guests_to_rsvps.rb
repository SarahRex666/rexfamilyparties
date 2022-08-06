class AddTotalGuestsToRsvps < ActiveRecord::Migration[6.1]
  def change
      add_column :rsvps, :total_guests, :integer
  end
end
