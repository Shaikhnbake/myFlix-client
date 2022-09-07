import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

import './login-view.scss';

import axios from "axios";


export function LoginView (props){
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState(''); 

    const validate = () => {
        let isReq = true;
        if(!username){
            setUsernameErr('Username Required');
            isReq = false;
        }else if(username.length < 5){
            setUsernameErr('Username must be atleast 5 characters,');
            isReq = false;
        }
        if(!password){
            setPasswordErr('Password Required');
            isReq = false;
        }
        return isReq;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if(isReq) {
            axios.post('https://myflix1najm.herokuapp.com/login', {
                username: username,
                password: password
            })
            .then(response => {
                const data = response.data;
                props.onLoggedIn(data); 
            })
            .catch(e => {
                console.log('User does not exist.')
            });       
        }
    };

    return (
        <Form className="login-view sm">
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
} 



LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),
    onLoggedIn: PropTypes.func.isRequired    
};

