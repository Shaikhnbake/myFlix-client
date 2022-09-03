import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import { Col, Row } from 'react-bootstrap';

import './main-view.scss';


export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      register: null
    };
  }

  componentDidMount() {
    axios.get('https://myflix1najm.herokuapp.com/movies')
      .then(Response => {
        this.setState({
          movies: Response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  /*When movie is clicked, function is called and changes state to selected movie */

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  /* */

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegistration(register) {
    this.setState({
      register
    });
  }

  render() {
    const { movies, selectedMovie, user, register } = this.state;

    /* if not registered user, Regisraion view is rendered */
    if (!register) return <RegistrationView onRegistration={register => this.onRegistration(register)} />;

    /* if no user, LOGIN VIEW is rendered. If user logged in their details are passed as prop to LoginView */
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    if (movies.length === 0) return <div className="main-view" />;

    if (selectedMovie) return (
      <Row className='main-view justify-content-md-center'>
        <Col sm={12} md={6} lg={3}>
          <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
        </Col>
      </Row>
    );


    return (
      <Row className='main-view justify-content-md-center'>
        {movies.map(movie =>
          <Col sm={12} md={6} lg={3}>
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          </Col>
        )}
      </Row>
    );
  }
}

export default MainView;

{/* movie(in yellow) is the React PROP by passing {movie} value + /> symbol is sames as calling map() function */ }
{/* <button onClick={() => { alert('Boogie WOogie!') }}>CLICK HERE</button> */ }
{/* 
        { _id: 1, title: 'Inception', description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg' },
        { _id: 2, title: 'Spirited Away', description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.", imagePath: 'https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png' },
        { _id: 3, title: 'The Lion King', description: "The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba's paternal uncle Scar kills Mufasa to seize the throne, Simba is manipulated into thinking he was responsible and flees into exile.", imagePath: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg' }
*/}
