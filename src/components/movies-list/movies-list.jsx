import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";

import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view" />;

  return (
    <Container>
    <Row>
      <Col className="mx-auto" style={{ margin: '1em' }}>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </Col>
    </Row>
    <Row className="g-4">
      {filteredMovies.map(m => (
        <Col xl={3} lg={4} md={6} sm={12} xs={12} key={m._id} className="mx-auto">
          <MovieCard movie={m} />
        </Col>
      ))}
    </Row>
    </Container>
  );

}

export default connect(mapStateToProps)(MoviesList);