import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './registration-view.scss';
import axios from "axios";


export function RegistrationView (props){
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');

    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr ] = useState('');
    const [ birthdayErr, setBirthdayErr ] = useState('');

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


    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if(isReq) {
            axios.post('https://myflix1najm.herokuapp.com/users', {
                username: username,
                password: password,
                email: email,
                birthday: birthday

            })
            .then(response => {
                const data = response.data; 
                alert('Registration succesful! Log in now');
                window.open('/','_self');
            })
            .catch(response => {
                console.log(response);
                alert('Unable to register')
            });       
        }
    };

    return (
     <Container>
        <Row className="mt-5 pb-3">
            <Col md={12}>
            <h3>Sign up here!</h3>
                <Form className="registration-view sm">
                    <Form.Group controlId="formUsername">
                        <Form.Label columnn sm={2}>Username:</Form.Label>
                        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                        {usernameErr && <p>{usernameErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                        {passwordErr && <p>{passwordErr}</p>}
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
                        {emailErr && <p>{emailErr}</p>}
                    </Form.Group>
                    <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="text" onChange={e => setBirthday(e.target.value)} />
                        {birthdayErr && <p>{birthdayErr}</p>}
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        <Row className="mx-auto">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            <p>Already registered <Link to={'/'}>sign in</Link> here</p>
        </Row>
     </Container>
    );
}

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired    
};
/*
 register: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired
    }).isRequired,



    <Row>
            <Link to='login-view'>
                <Button> Returning User? </Button>
            </Link>
        </Row> 
 */