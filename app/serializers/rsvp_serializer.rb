class RsvpSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :attending, :total_guests, :user, :kids, :dietary_restriction
  belongs_to :user
end
