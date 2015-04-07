# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Ride.create(
  name: "Mr. Toad's Wild Ride",
  description: "Mr. Toad's Wild Ride is a dark ride at Disneyland Park. It is one of the few remaining attractions that was operational on the park's opening day in 1955 (although the current version of the ride opened in 1983). The ride's story is based on Disney's adaptation of The Wind in the Willows (1908), one of the two segments of the film The Adventures of Ichabod and Mr. Toad (1949). It is currently operating in Fantasyland.",
  image_url: "https://c1.staticflickr.com/3/2683/5706799125_78b8e5d5dd_z.jpg")

Ride.create(
  name: "Splash Mountain",
  description: "Splash Mountain is a log flume-style dark ride at Disneyland, Tokyo Disneyland, and the Magic Kingdom at the Walt Disney World Resort, based on the characters, stories, and songs from the 1946 Disney film Song of the South. Although there are variations in the story and features between the three locations, each installation begins with a peaceful outdoor float-through that leads to indoor dark ride segments, with a climactic steep drop into a \"briar patch\" followed by an indoor finale. The drop is 50 feet.",
  image_url: "http://cdn.wdwmagic.com/imgstore/elements/Splash-Mountain.jpg"
)

Ride.create(
  name: "Dr. Doom's Fearfall",
  description: "Doctor Doom's Fearfall is a pair of pneumatically powered attractions themed after the Fantastic Four. The initial launch at the beginning of the ride uses more thrust than a 747 jet engine and accelerates faster than the space shuttle. The towers each stand 200 feet tall.",
  image_url: "http://www.magicmomentstur.com.br/blog/wp-content/uploads/2013/06/oi-universal-orlando-trip-report-august-2011-202.jpg"
)
