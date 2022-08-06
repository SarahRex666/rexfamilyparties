# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Rsvp.destroy_all
Party.destroy_all

puts "Seeding users..."
user1 = User.create(email: "sarahrexmakes@gmail.com", first_name: "Sarah", last_name: "Rex", address: "10 Surrey Ln", phone: "516-428-5941", username: "Sarah", password: "password", admin: true)
user2 = User.create(email: "brianarejtig@gmail.com", first_name: "Briana", last_name: "Rex", address: "10 Surrey Ln", phone: "516-946-2121", username: "Briana", password: "password", admin: true)

puts "Seeding partys..."
party1 = Party.create(name: "Shrekfest", description: "A celebration of all things Shrek")

puts "Seeding RSVPs..."
rsvp1 = Rsvp.create(user_id: user1.id, attending: true, total_guests: 1, kids: false, dietary_restriction: "Vegitarian")