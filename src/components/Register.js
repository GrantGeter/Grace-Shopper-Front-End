import { useState, useRef, useEffect } from 'react'
import { registerUser } from '../api';
import { storeToken } from '../auth';

const Register = ({ setCurrentUser }) => {
    const [user, setUser] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const [username, password, name, email] = event.target;
        if (username.value && password.value && name.value && email.value) {
            setUser({ username: username.value, password: password.value, name: name.value, email: email.value, admin: false })
        }
    }

    let initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            if (user) {
                console.log(user);
                registerUser(user)
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