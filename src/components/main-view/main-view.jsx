import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';

import { NavigationBar } from '../navbar/navbar';

import { Button, Col, Container, Row } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './main-view.scss';


export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      user: null
    };
  }

  

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios.get('https://myflix1najm.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      //Assign result to state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  consoleuser(user){
    console.log(user);
  }
  
  render() {
    const { movies,  user } = this.state;

    return (

     <Router>
      <NavigationBar user={user} />
      <Container>
        <Row className='main-view justify-content-md-center'>
          <Route exact path='/' render={() => {
            if (!user) return <Col>
              <LoginView movies={movies} onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
           
            if (movies.length === 0) return <div className="main-view" />;
            
           
           return movies.map(m => (
              <Col sm={12} md={6} lg={3} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />
          <Route path='/register' render={() => {
            if(user) return <Redirect to='/' />
            return <Col lg={8} md={8}>
              <RegistrationView />
            </Col>
          }} />
          <Route path='/movies/:movieId' render={({match, history }) => {
            if (!user) return <Col>
            <LoginView movies={movies} onLoggedIn={user => this.onLoggedIn(user)} />
          </Col>
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path='/genres/:name' render={({match, history}) => {
            if (!user) return <Col>
            <LoginView movies={movies} onLoggedIn={user => this.onLoggedIn(user)} />
          </Col>
            return <Col md={8}>
              <GenreView genre={movies.find(m => m.genre.name === match.params.name).genre} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path='/directors/:name' render={({match, history}) => {
            if (!user) return <Col>
            <LoginView movies={movies} onLoggedIn={user => this.onLoggedIn(user)} />
          </Col>
            return <Col md={8}>
              <DirectorView director={movies.find(m => m.director.name === match.params.name).director} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path={`/users/${user}`} render={({match, history}) => {
            if (!user) return <Redirect to='/' />
            return <Col md={8}>
              <ProfileView movies={movies} user={user} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path={`/user-update/${user}`} render={({match, history}) => {
            if (!user) return <Redirect to='/' />
            return <Col md={8}>
              <UserUpdate user={user} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          
        </Row>
      </Container>
     </Router> 
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

if (selectedMovie) return (
      <Row className='main-view justify-content-md-center'>
        <Col sm={12} md={6} lg={3}>
          <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
        </Col>
      </Row>
    );

    <Route exact path='/users/:username' render={({match, history}) => {
            return <Col md={8}>
              <ProfileView history={history} movies={movies} user={user === match.params.username} />
            </Col>
          }} /> 



           onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }


      
    if (!user) return <Row>
      <Col>
        <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
      </Col>
    </Row>

    if (movies.length === 0) return <div className="main-view" />;

        <Row>
          <Button onClick={() => {this.onLoggedOut()}}>Logout</Button>
        </Row>

      */}
