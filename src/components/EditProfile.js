import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { editProfile } from '../api';
import { getToken } from '../auth';


const EditProfile = ({ currentUser, setIsShown, setDisplayMessage, show, onHide }) => {
    console.log(currentUser)
    const [ username, setUsername ] = useState(undefined);
    const [ email, setEmail ] = useState(undefined);
    const [ password, setPassword ] = useState(undefined);
    const [ name, setName ] = useState(undefined);
    
    return (
    
        <div>              
             <Form>
                <Form.Group controlId="UsernameArea">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                         as="textarea"
                         rows={ 1 } 
                        placeholder={ currentUser.username } 
                        value={ username } 
                        onChange={(event) => setUsername(event.target.value)}> 
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="EmailArea">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={ 1 }
                     placeholder={ currentUser.email } 
                     value={ email } 
                     onChange={(event) => setEmail(event.target.value)}>
                     </Form.Control>
                </Form.Group>
                <Form.Group controlId="PasswordArea">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={ 1 }
                     placeholder="Password" 
                     value={ password } 
                     onChange={(event) => setPassword(event.target.value)}>
                     </Form.Control>
                </Form.Group>
                <Form.Group controlId="NameArea">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                     as="textarea"
                     rows={ 1 }
                     placeholder={ currentUser.name } 
                     value={ name } 
                     onChange={(event) => setName(event.target.value)}>
                     </Form.Control>
                </Form.Group>
                
                <Button variant="success" onClick={() => { 
                                                        onHide();
                                                        editProfile({ id: currentUser.id, username: currentUser.username }, { username: username, email: email, password: password, name: name }, getToken());
                                                        setDisplayMessage({
                                                        message: 'You have edited your profile!',
                                                        type: 'success'
                                                        });
                                                        setIsShown(true);
                                                        }}>Submit</Button>{''}
                </Form>
        </div>
    )
}
export default EditProfile;