class RsvpSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :attending, :dietary_restriction, :total_guests, :user, :kids
  belongs_to :user
end
