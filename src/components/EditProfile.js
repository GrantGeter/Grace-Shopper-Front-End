import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { editProfile } from '../api';
import { getToken } from '../auth';


const EditProfile = ({ currentUser }) => {
    console.log(currentUser)
    const [ username, setUsername ] = useState(undefined);
    const [ email, setEmail ] = useState(undefined);
    const [ password, setPassword ] = useState(undefined);
    const [ name, setName ] = useState(undefined);
    
    return (
    
        <div>              
             <Form onSubmit={() => { editProfile({ id: currentUser.id, username: currentUser.username }, { username: username, email: email, password: password, name: name }, getToken()) }}>
                <Form.Group controlId="UsernameArea">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                         as="textarea"
                         rows={ 1 } 
                        placeholder="Username" 
                        value={ username } 
                        onChange={(event) => setUsername(event.target.value)}> 
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="EmailArea">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={ 2 }
                     placeholder="Email" 
                     value={ email } 
                     onChange={(event) => setEmail(event.target.value)}>
                     </Form.Control>
                </Form.Group>
                <Form.Group controlId="PasswordArea">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={ 2 }
                     placeholder="Password" 
                     value={ password } 
                     onChange={(event) => setPassword(event.target.value)}>
                     </Form.Control>
                </Form.Group>
                <Form.Group controlId="NameArea">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={ 2 }
                     placeholder="Name" 
                     value={ name } 
                     onChange={(event) => setName(event.target.value)}>
                     </Form.Control>
                </Form.Group>
                
                <Button variant="success" onClick={() => { editProfile({ id: currentUser.id, username: currentUser.username }, { username: username, email: email, password: password, name: name }, getToken()) }}>Submit</Button>{''}
                </Form>
        </div>
    )
}
export default EditProfile;