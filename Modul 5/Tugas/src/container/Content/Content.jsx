import React, { Component } from "react";
import "./Content.css";
class Content extends Component {
    render() {
        return (
            <div class="w3-main c1">
                <div class="w3-container" style={{ marginTop: "80px" }} id="showcase">
                    <h1 class="w3-jumbo"><b>{this.props.id}</b></h1>
                    <h1 class="w3-xxxlarge w3-text-red"><b>{this.props.menu}</b></h1>
                    <hr style={{ width: "50px", border: "5px", solid: "red" }} class="w3-round" />
                </div>
            </div>
        )
    }
}





export default Content;