# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'huntysaurus', password_digest: 'password', image_url: "some_image_1", bio:"this is a story about my life")
User.create(username: 'sammysam', password_digest: 'userpassword', image_url: "some_image_2", bio: "this is a story about my life")
User.create(username: 'kareena63123', password_digest: 'passworduser', image_url: "some_image_3", bio: "this is a story about my life")