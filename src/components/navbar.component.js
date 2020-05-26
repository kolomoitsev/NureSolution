import React from "react";
import {Link} from "react-router-dom";

import '../App.css';


export default class Navbar extends React.Component {
    render() {
        return (
            <header id="header" className="transparent-header">
                <nav className="navbar navbar-default navbar-expand-md navbar-light" id="navigation" data-offset-top="1">
                    <div className="container">
                        <div className="navbar-header">
                        </div>
                        <div className="burger-icon">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        <div className="collapse navbar-collapse " id="navbarCollapse">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="subnav">
                                    <Link to="/" >Exercises list</Link>
                                </li>
                                <li className="subnav">
                                    <Link to="/users"> Users list</Link>
                                </li>
                                <li className="subnav">
                                    <Link to="/create">Create exercise log</Link>
                                </li>
                                <li className="subnav">
                                    <Link to="/user">Create user</Link>
                                </li>
                                <li className="subnav">
                                    <Link to="/register">Register user</Link>
                                </li>
                                <li className="subnav">
                                    <Link to="/login">login</Link>
                                </li>
                            </ul>
                        </div>


                    </div>

                </nav>

            </header>
        )
    }
}