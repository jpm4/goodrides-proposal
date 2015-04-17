# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

r1 = Ride.create(
  name: "Mr. Toad's Wild Ride",
  description: "Mr. Toad's Wild Ride is a dark ride at Disneyland Park. It is one of the few remaining attractions that was operational on the park's opening day in 1955 (although the current version of the ride opened in 1983). The ride's story is based on Disney's adaptation of The Wind in the Willows (1908), one of the two segments of the film The Adventures of Ichabod and Mr. Toad (1949). It is currently operating in Fantasyland.",
  image_url: "https://c1.staticflickr.com/3/2683/5706799125_78b8e5d5dd_z.jpg")

r2 = Ride.create(
  name: "Splash Mountain",
  description: "Splash Mountain is a log flume-style dark ride at Disneyland, Tokyo Disneyland, and the Magic Kingdom at the Walt Disney World Resort, based on the characters, stories, and songs from the 1946 Disney film Song of the South. Although there are variations in the story and features between the three locations, each installation begins with a peaceful outdoor float-through that leads to indoor dark ride segments, with a climactic steep drop into a \"briar patch\" followed by an indoor finale. The drop is 50 feet.",
  image_url: "http://th08.deviantart.net/fs70/PRE/f/2013/107/5/3/tokyo_disneyland___splash_mountain_by_duceduc-d620lin.jpg"
)

r3 = Ride.create(
  name: "Dr. Doom's Fearfall",
  description: "Doctor Doom's Fearfall is a pair of pneumatically powered attractions themed after the Fantastic Four. The initial launch at the beginning of the ride uses more thrust than a 747 jet engine and accelerates faster than the space shuttle. The towers each stand 200 feet tall.",
  image_url: "http://www.magicmomentstur.com.br/blog/wp-content/uploads/2013/06/oi-universal-orlando-trip-report-august-2011-202.jpg"
)

r4 = Ride.create(
  name: "Kingda Ka",
  description: "Kingda Ka is a steel accelerator roller coaster located at Six Flags Great Adventure in Jackson, New Jersey, United States. It is the world's tallest roller coaster, the world's second fastest roller coaster, and was the second strata coaster ever built.\n\nThe train is launched by a hydraulic launch mechanism to 128 miles per hour (206 km/h) in 3.5 seconds. At the end of the launch track, the train climbs the main top hat tower, reaching a height of 456 feet (139 m) and spanning over a 3,118-foot-long (950 m) track by the end of the ride.",
  image_url: "http://kingdaka.net/wp-content/uploads/2014/08/kingda-kagreatadventure.jpg")

r5 = Ride.create(
  name: "Pirates of the Caribbean",
  description: "Pirates of the Caribbean is a dark ride at Disneyland, the Magic Kingdom, Tokyo Disneyland, and Disneyland Park in Paris. The original version at Disneyland, which opened in 1967, was the last attraction whose construction was overseen by Walt Disney himself; he died three months before it opened. The ride, which originally told the story of a band of pirates including their troubles and their exploits, was replicated at the Magic Kingdom in 1973, at Tokyo Disneyland in 1983, and at Disneyland Paris in 1992. Each version of the ride has a different façade, but has a similar ride experience.",
  image_url: "http://www.freshbakeddisney.com/wp-content/uploads/2013/03/pirates.jpg"
)

r6 = Ride.create(
  name: "Harry Potter and the Forbidden Journey",
  description: "Harry Potter and the Forbidden Journey is a motion based dark ride located in The Wizarding World of Harry Potter themed areas of Islands of Adventure in Orlando, Florida, and Universal Studios Japan in Osaka, Japan. The ride takes guests through scenes and environments in and around Hogwarts Castle from the Harry Potter series of books and films. Mark Woodbury, president of Universal Creative, described the ride as an in-depth look at the world of Harry Potter, which utilizes never before seen technology which transforms \"the theme park experience as you know it\". The original attraction at Islands of Adventure opened with The Wizarding World of Harry Potter section on June 18, 2010. An installation has also been announced for Universal Studios Hollywood, with it due to open in 2016.",
  image_url: "http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Wizarding_World_of_Harry_Potter_Castle.jpg/1280px-Wizarding_World_of_Harry_Potter_Castle.jpg"
)

r7 = Ride.create(
  name: "Harry Potter and the Escape from Gringotts",
  description: "Harry Potter and the Escape from Gringotts is a 3-D motion-based steel roller coaster dark ride at Universal Studios Florida in Orlando, Florida. The ride themed to the Gringotts Wizarding Bank became the flagship attraction for the expanded Wizarding World of Harry Potter at Universal Orlando Resort when it opened July 8, 2014.",
  image_url: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Diagon_Alley3.jpg/1024px-Diagon_Alley3.jpg"
)

r8 = Ride.create(
  name: "GhostRider",
  description: "GhostRider is a wooden roller coaster at Knott's Berry Farm in Buena Park, California. It is located in the Ghost Town section of the park, south of the main entrance. It is the longest wooden coaster on the West Coast.",
  image_url: "http://25.media.tumblr.com/tumblr_ma52rv1M391r1e3nno1_1280.jpg"
)

r9 = Ride.create(
  name: "Walt Disney's Carousel of Progress",
  description: "Walt Disney's Carousel of Progress is an attraction located at the Magic Kingdom park at the Walt Disney World Resort. Created by both Walt Disney and WED Enterprises as the prime feature of the General Electric (GE) Pavilion for the 1964 New York World's Fair, the attraction was moved to Tomorrowland at Disneyland in Anaheim, California as Carousel of Progress, remaining there from 1967 until 1973. It was replaced in Disneyland by America Sings in 1974, and reopened in its present home in Walt Disney World Resort's Magic Kingdom in 1975.\n\nSteeped in both nostalgia and futurism, the attraction's premise is an exploration of the joys of living through the advent of electricity and other technological advances during the 20th century via a \"typical\" American family. To keep it up with the times, the attraction has been updated five times (in 1967, 1975, 1981, 1985, and 1993) and has had two different theme songs, both written by the Sherman Brothers (Disney's Academy Award-winning songwriting team).\n\nVarious sources say Walt Disney himself proclaimed that the Carousel of Progress was his favorite attraction and that it should never cease operation.",
  image_url: "http://upload.wikimedia.org/wikipedia/commons/0/06/Carousel_of_Progress_1900.jpg"
)

r10 = Ride.create(
  name: "Big Thunder Mountain Railroad",
  description: "Big Thunder Mountain Railroad is an indoor/outdoor mine train roller coaster located in Frontierland at several Disneyland-style Disney Parks worldwide. The ride exists at Disneyland Park (California) and the Magic Kingdom at Walt Disney World as Big Thunder Mountain Railroad, and at Tokyo Disneyland and Disneyland Park (Paris) as Big Thunder Mountain. Big Thunder Mountain Railroad is also the name of the fictional rail line the roller coaster depicts.",
  image_url: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Big_Thunder_Mountain_Railroad_2.jpg/1280px-Big_Thunder_Mountain_Railroad_2.jpg"
)

r11 = Ride.create(
  name: "Dudley Do-Right's Ripsaw Falls",
  description: "Dudley Do-Right's Ripsaw Falls is a log flume ride at Islands of Adventure in Orlando, Florida inspired by the Dudley Do-Right character created by cartoonists Jay Ward and Alex Anderson and based on 1999 film. Opened on May 28, 1999, it is one of the park's original attractions.",
  image_url: "http://f3.fsm.wikidi.com/aq/aa/mu/63206d391c00ba82b5e38f6d140065a78706353c.jpg"
)

u1 = User.create(username: "Yoda", password: "starwars")
u2 = User.create(username: "Anton Chigurh", password: "starwars")
u3 = User.create(username: "Daisy Duck", password: "starwars")
u4 = User.create(username: "Mary Poppins", password: "starwars")
u5 = User.create(username: "Hillary Clinton", password: "starwars")
u6 = User.create(username: "Jerry Seinfeld", password: "starwars")
u7 = User.create(username: "Olive Oyl", password: "starwars")
u8 = User.create(username: "Jasmine", password: "password")

Review.create(user_id: u1.id, ride_id: r1.id, star_rating: 5,
  body: "Favorite this ride is. Ride it you must.")
Review.create(user_id: u1.id, ride_id: r6.id, star_rating: 3,
  body: "Mmm, fun, but too much 3D.")
Review.create(user_id: u2.id, ride_id: r4.id, star_rating: 4.5,
 body: "What's the biggest coin you've ever lost on a roller coaster?")
Review.create(user_id: u4.id, ride_id: r2.id, star_rating: 5,
 body: "Practically perfect in every way.")
Review.create(user_id: u5.id, ride_id: r4.id, star_rating: 4,
 body: "Exhilirating and refreshing. Just what America needs.")
Review.create(user_id: u6.id, ride_id: r5.id, star_rating: 2.5,
 body: "I don't wanna be a pirate!")
Review.create(user_id: u7.id, ride_id: r7.id, star_rating: 1.5,
 body: "I prefer my own land over in Islands of Adventure!")
Review.create(user_id: u3.id, ride_id: r3.id, star_rating: 3.5,
 body: "Donald was such a pest on this one, but I enjoyed myself regardless.")
Review.create(user_id: u4.id, ride_id: r6.id, star_rating: 2,
 body: "Those Potter children could use a little discipline.")
Review.create(user_id: u6.id, ride_id: r2.id, star_rating: 4,
 body: "What's the deal with log flumes?")
Review.create(user_id: u6.id, ride_id: r1.id, star_rating: 5,
 body: "It's Mr. Toad! It's a wild ride! What's not to like?!")
Review.create(user_id: u5.id, ride_id: r2.id, star_rating: 5,
 body: "A step in the right direction. Right? ;-)")
Review.create(user_id: u5.id, ride_id: r3.id, star_rating: 4.5,
 body: "Shoots you up in the air with enough power to shatter any ceiling, glass or not!")
Review.create(user_id: u8.id, ride_id: r11.id, star_rating: 4.5,
 body: "Surprisingly fun and engaging though not quite on the level of Splash Mountain!")
 
Want.create(user_id: u7.id, ride_id: r3.id)
Want.create(user_id: u7.id, ride_id: r4.id)
Want.create(user_id: u5.id, ride_id: r4.id)
Want.create(user_id: u1.id, ride_id: r1.id)
Want.create(user_id: u6.id, ride_id: r1.id)
Want.create(user_id: u7.id, ride_id: r1.id)
Want.create(user_id: u7.id, ride_id: r6.id)
Want.create(user_id: u5.id, ride_id: r1.id)
Want.create(user_id: u1.id, ride_id: r2.id)
Want.create(user_id: u6.id, ride_id: r7.id)
