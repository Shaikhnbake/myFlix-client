import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from "react-bootstrap";

import './profile-view.scss';

export class ProfileView extends React.Component {

  render() {
    const { movie } = this.props;
    return (
      <Container fluid className="genre-view mx-auto " sm={12} md={6} lg={3}>
        <Row className="genre-name">
          <Col className="label">Genre: </Col>
          <Col className="value">{movie.genre.name}</Col>
        </Row>
        <Row className="genre-description">
          <Col className="value">{movie.genre.description}</Col>
        </Row>
      </Container>
    );
  }
}