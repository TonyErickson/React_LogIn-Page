import React from "react";
import Username from './username';
import Password from './password';
import Navbar from "./navbar";
import Button from "./button";

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className="container">
                <Navbar/>
                            
                <div className="container-box border">
                    
                    <h3>Log In Below</h3>
                    <div className="card">
                    <Username />
                    <br/>
                    <br/>
                    < Password />
                    <br/>
                    <br/>
                    <Button/>
                    </div>
                </div>
            </div>
        );
    }
}