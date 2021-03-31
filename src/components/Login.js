import { useState, useRef, useEffect } from 'react'
import { loginUser } from '../api';
import { storeToken } from '../auth';

const Login = ({ setCurrentUser }) => {
    const [user, setUser] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const [username, password] = event.target;
        if (username.value && password.value) {
            setUser({ username: username.value, password: password.value })
        }
    }

    let initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            if (user) {
                console.log(user);
                loginUser(user)
                    .then(response => {
                        setCurrentUser(response.data.user)
                        storeToken(response.data.token);
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
                <input type='text'></input>
                <label>Password</label>
                <input type='password'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Login;