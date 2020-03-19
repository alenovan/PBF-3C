import React, { Component } from "react";
import Data from '../Data/Data';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

class Nested extends Component {
    render() {
        return (
            <Router>

                <div>
                    <div class="w3-main c1">
                        <div class="w3-container" style={{ marginTop: "80px" }} id="showcase">
                            <h1 class="w3-jumbo"><b>Login</b></h1>
                            <AuthButton />
                            <LoginPage />
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/login"><LoginPage /></Route>
                    <PrivateRoute path="/private"><ProtectedPage /></PrivateRoute>
                </Switch>
            </Router>
        )
    }
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100)
    }
}

function AuthButton() {
    let history = useHistory();
    return fakeAuth.isAuthenticated ? (
        <div class="w3-container" id="showcase">
            <p>
                <h1 class="w3-jumbo"><b>Your Login</b></h1>

            </p>
        </div>
    ) : (
            <div class="w3-container" id="showcase">
                <h1 class="w3-jumbo">Your are not logged</h1>
            </div>
        )
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                        <Redirect to={{
                            pathname: "/login",
                            state: { from: location }
                        }} />
                    )
            }
        />
    )
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } }
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from)
        }
        )
    }
    return (
        <div class="w3-container" id="showcase">
            <button onClick={login}>Log in klik disni</button>
        </div>
    )
}

function ProtectedPage() {
    return (
        <div class="w3-container" style={{ marginTop: "80px", marginLeft: "500px" }} id="showcase">
            <h2>Private</h2>
        </div>
    )
}


export default Nested;