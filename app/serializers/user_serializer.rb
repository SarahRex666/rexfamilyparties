class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :phone, :username, :email, :password, :rsvps, :admin
  has_many :rsvps
end
