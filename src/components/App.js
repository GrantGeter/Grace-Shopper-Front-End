import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import { useState, useEffect } from 'react';

import {
    Home,
    Account,
    Products,
    Register,
    Login,
    Cart,
    PopupMessage,
    NavBar,
    CheckoutComplete
} from './index';

import { checkUser } from '../api'
import { getToken } from '../auth'

const App = () => {

    const [currentUser, setCurrentUser] = useState();
    const [isShown, setIsShown] = useState(false);
    const [displayMessage, setDisplayMessage] = useState();

    useEffect(() => {
        if (getToken()) {
            checkUser(getToken())
                .then(response => setCurrentUser(response.data))
        }

    }, [])

    return (
        <Router>
            <div className="title"><h1>Grace Shopper</h1></div>
            <NavBar />
            {/* <nav>
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link to='/account'>Account</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                </ul>
            </nav> */}
            <Switch>
                <Route exact path={['/home', '/']}>
                    <Home 
                     currentUser={currentUser}
                     setDisplayMessage={setDisplayMessage}
                     setIsShown={setIsShown}
                    />
                </Route>
                <Route exact path='/cart'>
                    <Cart
                        currentUser={currentUser}
                        setDisplayMessage={setDisplayMessage}
                        setIsShown={setIsShown}
                    />
                </Route>
                <Route exact path='/login'>
                    <Login
                        setCurrentUser={setCurrentUser}
                        setDisplayMessage={setDisplayMessage}
                        setIsShown={setIsShown}
                    />
                </Route>
                <Route exact path='/register'>
                    <Register
                        setCurrentUser={setCurrentUser}
                        setDisplayMessage={setDisplayMessage}
                        setIsShown={setIsShown}
                    />
                </Route>
                <Route exact path='/account'>

                    <Account
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        setDisplayMessage={setDisplayMessage}
                        setIsShown={setIsShown}
                    />
                </Route>
                <Route exact path='/products'>
                    <Products
                        currentUser={currentUser}
                        setDisplayMessage={setDisplayMessage}
                        setIsShown={setIsShown}
                    />
                </Route>
                <Route exact path='/completed'>
                    <CheckoutComplete
                        currentUser={currentUser}
                    />
                </Route>
            </Switch>
            <div>
                {
                    isShown ? <PopupMessage
                        displayMessage={displayMessage}
                        setIsShown={setIsShown} /> : ''
                }
            </div>
        </Router>
    )
}

export default App;