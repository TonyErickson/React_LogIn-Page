import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar">
                Navbar
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Employment</a>
                </li>
            </nav>
        );
    }
}