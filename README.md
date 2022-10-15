# myFlix App

This is the client-side for the application myFlix based on its existing server-side code (REST API and database).

Users must first create a profile in order to log in and save data about their favorite movies. Users will then  be able to access information on movies, directors and genres. 

## Screenshots

<img src="/img/myFlixAppScreenshot.png" alt="Alt text" style="display: inline-block; margin: 0 auto; max-width: 800px">


## Essential Views and Features

Main view 
- Returns a list of all movies to the user (each item with an image, title, and description)
- Sorting and filtering
- Ability to select a movie for more details
Single movie view 
- Returns data (description, genre, director,image) about a single movie to the user
- Allows users to add a movie to their list of favorites
Login view 
- Allows users to log in with a username and password
Registration view
- Allows new users to register (username, password, email, birthday)
Genre view 
- Returns data about a genre, with a name and description
Director view 
- Returns data about a director (name, bio, birth year, death year)
Profile view 
- Displays account details
- Displays favorite movies
- Allows users to update their user info (username, password, email, date of birth)
- Allows users to remove a movie from their list of favorites
- Allows existing users to deregister


## Deployment

To deploy this project run

```bash
  npx parcel src/index.html
```

## Authors

- [@Shaikhnbake](https://www.github.com/Shaikhnbake)


## Tech Stack

This is a single-page application (SPA) that uses state routing to navigate between views and share URLs.

**Client:** 
- Parcel (build tool)
- React, React-Redux, React-Bootstrap, React-Dom, React-Router-Dom
- Redux, Redux-Devtools-Extension

