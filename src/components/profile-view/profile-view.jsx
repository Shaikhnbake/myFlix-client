import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import './profile-view.scss';
import { useEffect } from "react";

export function ProfileView(props) {
    const [ user, setUser ] = useState(props.user);
    const [ movies, setMovies ] = useState(props.movies);
    const [ topMovies, setTopMovies ] = useState([]);
    
    const token = localStorage.getItem('token');
    const localUser = localStorage.getItem('user');
  
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


  
    
    return (
    <Container>
        <Row className="mt-5">
            <Col md={12}>
                <Form className="profile-view">
                    <h3>Account Details</h3>
                    <p>If you wish to make any changes please feel free to do so:</p>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Current Username: {user.username} </Form.Label>
                        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                        {usernameErr && <p>{usernameErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                        {passwordErr && <p>{passwordErr}</p>}
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Current Email: {user.email}</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
                        {emailErr && <p>{emailErr}</p>}
                    </Form.Group>
                    <Form.Group controlId="formBirthday">
                        <Form.Label>Current Birthday: {user.birthday}</Form.Label>
                        <Form.Control type="text" onChange={e => setBirthday(e.target.value)} />
                        {birthdayErr && <p>{birthdayErr}</p>}
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleUpdateSubmit}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        <Row className="topMovies">
            <Col>
                {user.topMovies}
            </Col>

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
