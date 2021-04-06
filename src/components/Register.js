import { useState, useRef, useEffect } from 'react'
import { registerUser } from '../api';
import { storeToken } from '../auth';

const Register = ({ setCurrentUser, setDisplayMessage, setIsShown }) => {
    const [user, setUser] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const [username, password, name, email] = event.target;
        if (username.value && password.value && name.value && email.value) {

            setUser({ username: username.value, password: password.value, name: name.value, email: email.value })
        } else {
            setDisplayMessage({
                message: 'Please provide all required feilds',
                type: 'error'
            })
            setIsShown(true);
        }
    }

    let initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            if (user) {
                console.log(user);
                registerUser(user)
                    .then(response => {
                        if (response.data) {
                            setCurrentUser(response.data.user)
                            storeToken(response.data.token);
                            setDisplayMessage({
                                message: 'You are registered!',
                                type: 'success'
                            })
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Error please try again ',
                                type: 'Error'
                            })
                            setIsShown(true);
                        }
                    })
            }
        } else {
            initialRender.current = false;
        }
    }, [user])

    return (
        <div>
            <h3>Register Page</h3>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' required></input>
                <label>Password</label>
                <input type='password'></input>
                <label>Name</label>
                <input type='text' required></input>
                <label>Email</label>
                <input type='email' required></input>
                <input type='submit'></input>

            </form>
        </div>
    )
}

export default Register;