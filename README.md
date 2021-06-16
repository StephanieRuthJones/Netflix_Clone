# Netflix Clone

This project is a simplified front end clone of Netflix. It was created with React and CSS. It uses [The MovieDB Api](https://www.themoviedb.org/documentation/api) to search for movies and display details.

### Local Development

To run the application you will need a `.env` file with a TMDB api key specified as `API_KEY=KEY_HERE`.

- Install dependencies: run `npm install` in root project
- Create a `.env` file with the API key in this format `API_KEY="api-key"`
- Run project: `npm run dev`

# Assignment Instructions

### Part 1: Functionality bugs

[X] 1: When using the application some users are reporting issues with their account dropdown popping up when their mouse is over it. This screen recording shows a user frustrated with this portion of the application. Our designer has decided to change this functionality from being a "hover over" to being a button that when clicked will show the account menu.

[X] 2: Users are reporting that some titles are displaying "Runtime: m" in some scenarios and a Runtime with a number of minutes in others. Update so we only show the runtime text when we know the runtime.

### Part 2: Style bugs

[X] 1: Users are reporting that when a movie description modal is open they can scroll the page behind it. Update so that when a modal is open, the background cannot be scrolled but the modal can (if it has enough content).

[X] 2: Our designer has noticed that the plus and play icons in the header and modal for movie descriptions are not vertically aligned within their respective buttons. Update so that they are vertically aligned.

### Part 3: "My list" feature

The "My List" functionality is half built out, there are buttons for adding titles to "My List" but they are just stubs. With this feature, you should be able to:

- Add/remove movies to a list that is available throughout the application(Redux).
- See which movie ids are in that list when you click the "My List" tab in the navbar.

_User stories_

[X] 1. A user should be able to add a movie to their list via the "+ My List" button
[X] 2. If a user is viewing a movie that is already within their list the "+ My List" button should change to "- My List" and should remove the movie from their list.
[X] 3. A user should be able to see all their movie ids in their list by clicking the "My List" tab in the top navbar (just in an alert modal as it is currently).

_Considerations_

- State only needs to be stored client side (within memory and stored to local storage, no back-end persistence)
- Code style/architecture should reasonably match existing
- This is limited to only showing the movie IDs in the My List, no need to build out the full UI for this project.

IMPROVEMENTS:
- Code splitting
- Tests
- Error Boundaries
- Fail cases for all reducers
- Data caching
- loading animation
- redux toolkit
- concat strings with template literal
- Make repeated funcs reusable / in utils
