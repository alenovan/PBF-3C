import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import "./Keranjang.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class Keranjang extends Component {
    state = {
        listKeranjang: []
    }
    componentDidMount() {
        this.ambilDataDariServerAPI()
    }


    ambilDataDariServerAPI() {
        fetch("http://localhost:5001/keranjang")
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}
export default Keranjang;