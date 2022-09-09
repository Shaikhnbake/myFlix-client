import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserInfo from "./user-info";
import TopMovies from "./top-movies";
import UpdateUser from "./update-user";

import './profile-view.scss';
import { useEffect } from "react";

export function ProfileView(props) {
    const [ user, setUser ] = useState({
        username: '',
        email: '',
        topMovies: []
    })
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

    const validate = () => {
        let isReq = true;
        if(!username){
            setUsernameErr('Username Required');
            isReq = false;
        }else if(username.length <2){
            setUsernameErr('Username has to be atleast 3 characters')
            isReq = false;
        }
        if(!password){
            setPasswordErr('Password Required');
            isReq = false;
        }
        if(!email){
            setEmailErr('Email Required');
            isReq = false;
        }else if(email.indexOf('@') === -1){
            setEmailErr('Email is not valid')
            isReq = false;
        }
        if(!birthday){
            setBirthdayErr('Birthday Required')
            isReq = false;
        }

        return isReq;
    }


    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if(isReq) {
            axios.put('https://myflix1najm.herokuapp.com/users', {
                username: username,
                password: password,
                email: email,
                birthday: birthday

            },
            { 
                headers: { Authorization: `Bearer ${token}`}
            })
            .then(response => {
                alert('Changes were succesful!');
                window.open('/users/:username','_self');
                console.log(response.data);
            })
            .catch(response => {
                console.log(response);
                alert('Unable to update.')
            });       
        }
    };

    

    const removeTopMovie = (id) => {}


  
    
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
                        <UpdateUser handleUpdateSubmit={handleUpdateSubmit} />                    
                    </Card.Body>
                </Card>     
            </Col>      
        </Row>

        <Row className="topMovies">
            <Col>
                <TopMovies topMoviesList={topMoviesList} />
            </Col>

        </Row>
        <Row className="mt-5">
           
        </Row>
        <Row>
            <p>Do you wish to delete you account?</p>
                <Button variant="danger" type="submit" onClick={deleteUser}>
                    <h1>CONFIRM DELETE</h1>
                </Button>
        </Row>
     </Container>
    );
  }
