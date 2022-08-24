import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        { _id: 1, title: 'Inception', description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg' },
        { _id: 2, title: 'Spirited Away', description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.", imagePath: 'https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png' },
        { _id: 3, title: 'The Lion King', description: "The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba's paternal uncle Scar kills Mufasa to seize the throne, Simba is manipulated into thinking he was responsible and flees into exile.", imagePath: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg' }
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }


  render() {
    const { movies, selectedMovie } = this.state;

    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}
      </div>
    );
  }
}

export default MainView;

{/* movie(in yellow) is the React PROP by passing {movie} value + /> symbol is sames as calling map() function */ }
{/* <button onClick={() => { alert('Boogie WOogie!') }}>CLICK HERE</button> */ }
