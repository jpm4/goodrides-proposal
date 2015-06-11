# goodrides

[Live Link][live]

[live]: http://goodrides.io

## Minimum Viable Product
goodrides is a clone of goodreads built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] View rides
- [x] Give rides a star rating
- [x] Display average star rating
- [x] Create ride reviews
- [x] View ride reviews
- [x] View a list of rides rated
- [x] Search for rides by name
- [x] Tag rides as "want to ride"
- [x] View "want to ride" list

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Ride Views (~1-2 days)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to view rides in a Rails view.
I will need to make some seed data for this phase. The most important part of this
phase will be pushing the app to Heroku and ensuring that everything works before
moving on to phase 2.

[Details][phase-one]

### Phase 2: Writing and Viewing Reviews (~1-2 days)
I will add API routes to serve ride and review data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create reviews, rate and view both rides and reviews, all
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Displaying Ride Collections (~2 days)
I will make a Ride Collection view which will take in a collection of rides (whether
it's all rides a user has reviewed, all rides a user wants to ride, most popular
rides, search results, etc.) and display the images and ride names with links to
the show pages.

[Details][phase-three]

### Phase 4: Searching, User Pages and "Want to Ride" (~2 days)
I will implement searching for rides by name and add tags
for "want to ride".

[Details][phase-four]

### Phase 5: Polishing and Adding Functionality (~2 days)
I will make sure everything looks nice and polished and will begin to implement
extra features if time allows.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Group rides by theme park
- [ ] Create rides not in database
- [ ] Image gallery for each ride
- [ ] Pagination/infinite scroll
- [ ] Activity history
- [ ] User avatars
- [x] Recent Tweets on ride show pages
- [ ] Quotes
- [ ] Typeahead search bar
- [ ] Show rides on map

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
