import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import './profile-view.scss'

function TopMovies(props) {

    const {topMoviesList, localUser, token} = props;

    const removeTopMovie = (movieId) => {
        axios.delete(`https://myflix1najm.herokuapp.com/users/${localUser}/movies/${movieId}`, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        console.log('Movie has been removed from top movies.');
        window.open(`/users/${localUser}`, '_self');
      })
      .catch(function (error) {
        console.log(error);
      })

    }

    return (
    <Container>
        <Row className="mx-auto pb-4">
            <Col xs={12}>
                <h1>Top Movies List</h1>
            </Col>
        </Row>
        <Row xs={1} md={2} className="g-4">
            {topMoviesList.map((movie) => {
                return (
                    <Container key={movie._id}>
                        <Col className="topMovies-list" xs={12} md={6} lg={3} >
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
                                <Button variant="danger" onClick={() => removeTopMovie(movie._id) }>
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

