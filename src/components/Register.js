import { useState, useRef, useEffect } from 'react'
import { registerUser } from '../api';

const Register = () => {
    const [user, setUser] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const [username, password, name, email] = event.target;
        if (username.value && password.value && name.value && email.value) {
            setUser({ username: username.value, password: password.value, name: name.value, email: email.value })
        }
    }

    let initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            if (user) {
                console.log(user);
                registerUser(user)
                    .then(console.log)
            }
        } else {
            initialRender.current = false;
        }
    })

    return (
        <div>
            <h3>Register Page</h3>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text'></input>
                <label>Password</label>
                <input type='password'></input>
                <label>Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <input type='submit'></input>

            </form>
        </div>
    )
}

export default Register;