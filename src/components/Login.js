import { useState, useRef, useEffect } from 'react'
import { loginUser } from '../api';

const Login = () => {
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
                    .then(console.log)
            }
        } else {
            initialRender.current = false;
        }
    })

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