class RsvpSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :kids, :attending, :dietary_restriction, :total_guests, :user
  belongs_to :user
end
