class Party < ApplicationRecord
    has_many :rsvps
    has_many :parties, through: :rsvps
end
