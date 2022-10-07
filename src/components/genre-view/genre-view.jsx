import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from "react-bootstrap";

import './genre-view.scss';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;
    return (
      <Container fluid className="genre-view mx-auto " sm={12} md={6} lg={3}>
        <Row className="genre-name">
          <Col className="label">Genre: </Col>
          <Col className="value">{genre.name}</Col>
        </Row>
        <Row className="genre-description">
          <Col className="value">{genre.description}</Col>
        </Row>
        <Row>
          <Button onClick={() => {onBackClick(null);}}>Back</Button>
        </Row>
      </Container>
    );
  }
}

GenreView.propTypes = {
     genre: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      }).isRequired
  };
  