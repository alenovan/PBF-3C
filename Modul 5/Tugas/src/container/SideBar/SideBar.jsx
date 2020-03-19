import React, { Component } from "react";
import "./SideBar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import App from '../../App';
import Content from '../Content/Content';
import Nested from '../Nested/Nested';
import Red from '../Redirect/Redirect';
class SideBar extends Component {
    render() {
        return (
            <Router>
                <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding nav1" id="mySidebar"><br />
                    <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft nav2" >Close Menu</a>
                    <div class="w3-container">
                        <h3 class="w3-padding-64"><b>Alenovan Putra<br />Shop</b></h3>
                    </div>
                    <div class="w3-bar-block">
                        <Link to="/home"><div class="w3-bar-item w3-button w3-hover-white">Home</div></Link>
                        <Link to="/toko">  <div class="w3-bar-item w3-button w3-hover-white">Toko [Nested]</div></Link>
                        <Link to="/login">  <div class="w3-bar-item w3-button w3-hover-white">Login</div></Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact={true} path="/home">
                        <Content id="Silahkan Login terlebih dahulu" menu="Beranda" />
                    </Route>
                    <Route exact={true} path="/toko">
                        <Nested />
                    </Route>
                    <Route exact={true} path="/login">
                        <Red />
                    </Route>
                </Switch>
            </Router>
        )
    }
}


export default SideBar;