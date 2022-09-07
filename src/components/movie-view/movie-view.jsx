import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from "react-bootstrap";

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
    return (
      <Container fluid className="movie-view mx-auto " sm={12} md={6} lg={3}>
        <Row>
          <Col className="movie-poster">
            <img src={movie.imgURL} crossOrigin="true" />
          </Col>
        </Row>
        <Row className="movie-title">
          <Col className="label">Title: </Col>
          <Col className="value">{movie.title}</Col>
        </Row>
        <Row className="movie-description">
          <Col className="label">Description: </Col>
          <Col className="value">{movie.description}</Col>
          <Link to={`/directors/${movie.director.name}`}>
            <Button variant="link">Director Info</Button>
          </Link>
          <Link to={`/genres/${movie.genre.name}`}>
            <Button variant="link">Genre Info</Button>
          </Link>
          <Button onClick={() => {onBackClick(null);}}>Back</Button>
        </Row>
        
      </Container>
    );
  }
}


MovieView.propTypes = {
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
};
