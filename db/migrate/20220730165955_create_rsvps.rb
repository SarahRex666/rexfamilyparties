class CreateRsvps < ActiveRecord::Migration[6.1]
  def change
    create_table :rsvps do |t|
      t.belongs_to :user
      t.belongs_to :party
      t.boolean :attending

      t.timestamps
    end
  end
end
