import React from "react";

function UpdateUser({ handleUpdateSubmit }) {
    
    
    <Form className="updateProfile">
        <h3>Account Details</h3>
        <p>If you wish to make any changes please feel free to do so:</p>
        <Form.Group controlId="formUsername">
            <Form.Label>Username:  </Form.Label>
            <Form.Control type="text" defaultValue={user.username} placeholder="Enter new username" onChange={e => setUsername(e.target.value)} />
            {usernameErr && <p>{usernameErr}</p>}
        </Form.Group>

        <Form.Group controlId="formPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" placeholder="Enter new password" onChange={e => setPassword(e.target.value)} />
            {passwordErr && <p>{passwordErr}</p>}
        </Form.Group>
        <Form.Group controlId="formEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="Enter current email" onChange={e => setEmail(e.target.value)} />
            {emailErr && <p>{emailErr}</p>}
        </Form.Group>
        <Form.Group controlId="formBirthday">
            <Form.Label>Birthday: </Form.Label>
            <Form.Control type="text" onChange={e => setBirthday(e.target.value)} />
            {birthdayErr && <p>{birthdayErr}</p>}
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleUpdateSubmit}>
            Submit
        </Button>
    </Form>
}

export default UpdateUser