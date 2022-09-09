import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function TopMovies({ topMoviesList }) {
    return (
    <Container>
        <Row>
            <Col xs={12}>
                <h1>Top Movies List</h1>
            </Col>
        </Row>
        <Row>
            {topMoviesList.map((movies) => {
                return (
                    <Container>
                        <Col className="topMovies-list" xs={12} md={6} lg={3} key={movies._id}>
                            <img src={movies.imgURL} />
                            <Link to={`/movies/${movies._id}`}>
                            <h4>{movies.title}</h4>
                            </Link>
                            <Button variant="secondary" onClick={() => removeTopMovie(movies._id) }>
                                Remove from Top Movies
                            </Button>
                        </Col>
                        </Container>
                        )
            })}
        </Row>
    </Container>
    )
}

export default TopMovies