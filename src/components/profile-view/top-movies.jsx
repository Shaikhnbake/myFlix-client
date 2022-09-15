import React, {useState} from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


import './profile-view.scss'

export function TopMovies(props) {
    const {movies, topMovies, token, localUser} = props;

    const topMoviesId = topMovies.map(m => m._id)

    const topMoviesList = movies.filter(m => {
        return topMoviesId.includes(m._id);
    })

    const removeTopMovie = () => {
        axios.delete(`https://myflix1najm.herokuapp.com/users/${localUser}/movies/${movie._id}`, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        console.log('Movie has been removed from top movies.');
      })
      .catch(function (error) {
        console.log(error);
      })

    }


    return (
    <Container>
        <Row>
            <Col xs={12}>
                <h1>Top Movies List</h1>
            </Col>
        </Row>
        <Row>
            {topMoviesList.map((movie) => {
                return (
                    <Container>
                        <Col className="topMovies-list" xs={12} md={6} lg={3} key={movie._id}>
                        <Card className="movie-card sm" style={{width: '18rem'}}>
                            <Card.Img crossOrigin= "true" variant="top" src={movie.imgURL} />
                            <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.description}</Card.Text>
                            <Link to={`/movies/${movie._id}`}>
                                <Button variant="link">Read More..</Button>
                            </Link>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="secondary" onClick={() => removeTopMovie(movie._id) }>
                                    Remove from Top Movies
                                </Button>
                            </Card.Footer>
                        </Card>
                        </Col>
                        </Container>
                        )
            })}
        </Row>
    </Container>
    )
}

export default TopMovies

