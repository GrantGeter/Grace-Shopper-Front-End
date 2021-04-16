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
    CheckoutComplete,
    Dashboard
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
            <NavBar currentUser={currentUser} />

            <Switch>
                <Route exact path={['/home', '/']}>
                    <Home />
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
                <Route exact path='/dashboard'>
                    <Dashboard
                        setDisplayMessage={setDisplayMessage}
                        setIsShown={setIsShown}
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