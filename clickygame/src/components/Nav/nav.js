import React from "react";
import "./nav.css"

const Nav = props => (
    <div>
        <nav>
            <ul>
                <li className="navabar">
                    <a href="/clicky-game/">{props.title}</a>
                </li>

                <li id="rw">{props.rightWrong}</li>

                <li id="cur-sco">Current Score: {props.score}</li>

                <li id="top-sco">Top Score: {props.topScore}</li>
            </ul>
        </nav>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">ft. The Wizarding World of Harry Potter</p>
            </div>
        </div>
    </div>
)
export default Nav;