import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import { useState } from 'react'

import {
    Home,
    Account,
    Products,
    Register,
    Login,
    Cart
} from './index';

const App = () => {

    const [currentUser, setCurrentUser] = useState();

    return (
        <Router>
            <h1>Grace Shopper</h1>
            <nav>
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
            </nav>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/cart'>
                    <Cart />
                </Route>
                <Route exact path='/login'>
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path='/register'>
                    <Register setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path='/account'>
                    <Account />
                </Route>
                <Route exact path='/products'>
                    <Products currentUser={currentUser} />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;