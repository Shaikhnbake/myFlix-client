import React from "react";

function UserInfo({ email, name, birthday}) {
    return (
        <Row>
            <h1>Account Details</h1>
            <p>Username: {name}</p>
            <p>Email: {email}</p>
            <p>Birthday: {birthday}</p>
        </Row>
    )
}

export default UserInfo