import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function UpdateUser(props) {
    const { user } = props;

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
        <Row>
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
        </Row>
     </Container>
    )
}

export default UpdateUser