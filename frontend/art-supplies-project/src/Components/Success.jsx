import React, {Component} from "react";
import {AppBar} from "material-ui";

export class Confirm extends Component {
    render() {
        return (
            <div>
                <AppBar title="Success" iconClassNameLeft/>
                <div className='success'>
                    <h2>Thank You For your Registration</h2>
                    <br/>
                    <p>You will get an email with further instructions for Login</p>
                </div>
            </div>

        );
    }
}

export default Confirm;
