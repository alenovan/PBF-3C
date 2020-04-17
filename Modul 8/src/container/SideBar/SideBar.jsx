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
import Product from '../Product/Product';
import Keranjang from '../Keranjang/Keranjang';
class SideBar extends Component {
    render() {
        return (
            <Router>
                <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding nav1" id="mySidebar"><br />
                    <a href="javascript:void(0)" onClick="w3_close()" class="w3-button w3-hide-large w3-display-topleft nav2" >Close Menu</a>
                    <div class="w3-container">
                        <h3 class="w3-padding-64"><b>Washer Putra<br />Shop</b></h3>
                    </div>
                    <div class="w3-bar-block">
                        <Link to="/home"><div class="w3-bar-item w3-button w3-hover-white" style={{ color: 'white' }}>Home</div></Link>
                        <Link to="/toko">  <div class="w3-bar-item w3-button w3-hover-white" style={{ color: 'white' }}>Toko</div></Link>
                        <Link to="/keranjang">  <div class="w3-bar-item w3-button w3-hover-white" style={{ color: 'white' }}>Keranjang</div></Link>
                        <Link to="/tentang">  <div class="w3-bar-item w3-button w3-hover-white" style={{ color: 'white' }}>Tentang Kami</div></Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact={true} path="/home">
                        <Content id="Selamat Darang Di Toko Kami" menu="Beranda" />
                    </Route>
                    <Route exact={true} path="/toko">
                        <Product />
                    </Route>
                    <Route exact={true} path="/keranjang">
                        <Keranjang />
                    </Route>
                </Switch>
            </Router >
        )
    }
}


export default SideBar;