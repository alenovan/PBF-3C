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
                            <h1 class="w3-jumbo"><b>Categori Barang</b></h1>
                            <h1 class="w3-xxxlarge w3-text-red"><b><Link to="/sepatu">Sepatu</Link></b></h1>
                            <h1 class="w3-xxxlarge w3-text-red"><b><Link to="/tas">tas</Link></b></h1>
                            <h1 class="w3-xxxlarge w3-text-red"><b><Link to="/hp">hp</Link></b></h1>
                            <hr style={{ width: "50px", border: "5px", solid: "red" }} class="w3-round" />
                        </div>
                    </div>
                    <Switch>
                        <Route exact={true} path="/sepatu">
                            <Data name="data sepatu" />
                        </Route>
                        <Route exact={true} path="/tas">
                            <Data name="data tas" />
                        </Route>
                        <Route exact={true} path="/hp">
                            <Data name="data hp" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}


export default Nested;