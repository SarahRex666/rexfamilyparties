class User < ApplicationRecord
    has_secure_password
    has_many :rsvps
    has_many :parties, through: :rsvps

    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
