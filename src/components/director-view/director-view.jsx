import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from "react-bootstrap";

import './director-view.scss';

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick } = this.props;
    return (
      <Container fluid className="director-view mx-auto " sm={12} md={6} lg={3}>
        <Row className="director-name">
          <Col className="label">Director: </Col>
          <Col className="value">{director.name}</Col>
        </Row>
        <Row className="director-bio">
          <Col className="value">{director.bio}</Col>
        </Row>
        <Row className="director-life">
          <Col className="label">Birth Year: </Col>
          <Col className="value">{director.birthYear}</Col>
          <p> - </p>
          <Col className="value">{director.deathYear}</Col>
        </Row>
        <Row>
          <Button onClick={() => { onBackClick(null); }}>Back</Button>
        </Row>
      </Container>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    birthYear: PropTypes.string,
    deathYear: PropTypes.string
  }).isRequired,
};