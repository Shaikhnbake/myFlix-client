import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import UserInfo from "./user-info";
import TopMovies from "./top-movies";
import UpdateUser from "./update-user";
import axios from "axios";

import './profile-view.scss';
import { useEffect, useState } from "react";

export function ProfileView(props) {
    const [ user, setUser ] = useState(props.user);
    const [ movies, setMovies ] = useState(props.movies);
    const [ topMovies, setTopMovies ] = useState([]);
    
    const token = localStorage.getItem('token');
    const localUser = localStorage.getItem('user');

    const topMoviesList = movies.filter((movies) => {
        return user.topMovies.includes(movies._id);
    });
  
    const getUser = () => {
        axios.get(`https://myflix1najm.herokuapp.com/users/${localUser}`, {
          headers: { Authorization: `Bearer ${token}`}
        })
        .then(response => {
            setUser(response.data);
            setTopMovies(response.data.topMovies)
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    
    useEffect(() => {
        getUser();
    }, [])

    

    const deleteUser = () => {
      axios.delete(`https://myflix1najm.herokuapp.com/users/${localUser}`, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        localStorage.clear();
        window.open('/','_self');
        console.log('Account has been deleted!');
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    return (
    <Container>
        <Row>
            <Col xs={12} sm ={4}>
                <Card>
                    <Card.Body>
                        <UserInfo name={user.username} email={user.email} birthday={user.birthday}/>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm ={8}>
                <Card>
                    <Card.Body>
                        <UpdateUser user={user} token={token} localUser={localUser}/>                    
                    </Card.Body>
                </Card>     
            </Col>      
        </Row>

        <Row className="topMovies">
            <Col>
                <TopMovies topMoviesList={topMoviesList} token={token} localUser={localUser} />
            </Col>

        </Row>
        <Row className="mt-5">
           
        </Row>
        <Row>
            <p>Do you wish to delete you account?</p>
                <Button variant="danger" type="submit" size="sm" className="button-delete" onClick={deleteUser}>
                    <h1>CONFIRM DELETE</h1>
                </Button>
        </Row>
     </Container>
    );
  }
