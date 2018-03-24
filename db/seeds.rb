30.times do
  name = Faker::Food.dish
  price = Faker::Number.decimal(2)
  description = Faker::Lorem.words
  img = Faker::Avatar.image(name, '50x50', 'png', 'set4')
  Item.create(
    name: name, 
    price: price, 
    description: description, 
    img: img
  )
end