class CreateRsvps < ActiveRecord::Migration[6.1]
  def change
    create_table :rsvps do |t|
      t.belongs_to :user
      t.boolean :attending
      t.string :dietary_restriction
      t.boolean :kids

      t.timestamps
    end
  end
end
