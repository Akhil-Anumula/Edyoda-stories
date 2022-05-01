import React, { Component } from "react";
import "./Styles.css"
export class Header extends Component {
    render() {
        return (
            <div id="header">
                <div class="main">
                    <div id="logo">
                        <a href="https://www.edyoda.com/stories" >EDYODA</a>
                    </div>
                    <p id="logot">Stories</p>
                </div>

                <div class="main" >
                    <p id="dd">Explore Categories <i class="fas fa-caret-down"></i></p>

                </div>
                <div class="main" >
                    <p >EdYoda is free learning and knowledge sharing platform for techies</p>
                </div>
                <div class="main" >
                    <button id="homebutton"><a  href="https://edyoda.com">Go to Main Website</a></button>
            </div>
            </div>
         )
    }
}

export default Header;