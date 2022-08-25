import React from "react";

export default class Password extends React.Component{
    render(){
        return (
            <label className="Password">
                Password:
                    <input placeholder="Password" type="password" name="password"  />
            </label>
        );
    }
}