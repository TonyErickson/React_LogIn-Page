import React from "react";

export default class Username extends React.Component{
    render(){
        return (
            <label className="Username">
                Username: 
                    <input placeholder="Enter your Username" type="text" name="username"  />
            </label>
        );    
    }
}