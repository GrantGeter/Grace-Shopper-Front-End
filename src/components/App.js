import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import {
    Home,
    Account,
    Products,
    Register,
    Login
} from './index';

const App = () => {
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
                </ul>
            </nav>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/register'>
                    <Register />
                </Route>
                <Route exact path='/account'>
                    <Account />
                </Route>
                <Route exact path='/products'>
                    <Products />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;