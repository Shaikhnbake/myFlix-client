import React from "react";
import {  Row } from 'react-bootstrap';


function UserInfo({ email, name, birthday}) {
    return (
        <Row className="d-flex accountDetails">
            <h1>Account Details</h1>
            <p>Username: {name}</p>
            <p>Email: {email}</p>
            <p>Birthday: {birthday}</p>
        </Row>
    )
}

export default UserInfo