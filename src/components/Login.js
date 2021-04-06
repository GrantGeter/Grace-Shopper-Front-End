import { useState, useRef, useEffect } from 'react'
import { loginUser } from '../api';
import { storeToken } from '../auth';

const Login = ({ setCurrentUser, setIsShown, setDisplayMessage }) => {
    const [user, setUser] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const [username, password] = event.target;
        if (username.value && password.value) {
            setUser({ username: username.value, password: password.value })
        } else {
            setDisplayMessage({
                message: 'Please provide a username and password',
                type: 'error'
            });
            setIsShown(true);
        }
    }

    let initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            if (user) {
                console.log(user);
                loginUser(user)
                    .then(response => {
                        if (response.data) {
                            setCurrentUser(response.data.user)
                            storeToken(response.data.token);
                            setDisplayMessage({
                                message: 'You are logged in!',
                                type: 'success'
                            });
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Incorrect username or password',
                                type: 'error'
                            });
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
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' required></input>
                <label>Password</label>
                <input type='password' required></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Login;