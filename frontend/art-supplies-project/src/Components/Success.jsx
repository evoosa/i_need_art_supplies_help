import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar } from "material-ui";

export class Confirm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" iconClassNameLeft />
          <div className='success'>
            <h2>Thank You For your Registration</h2>
            <br/>
            <p>You will get an email with further instructions for Login</p>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
