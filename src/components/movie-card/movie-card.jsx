import React from "react";
import PropTypes from 'prop-types';



export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.title}</div>;
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    year: PropTypes.string,
    featured: PropTypes.string,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      birthYear: PropTypes.string,
      deathYear: PropTypes.string
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};