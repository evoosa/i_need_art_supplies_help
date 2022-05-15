import React, {Component} from "react";
import {AppBar, ListItem, List} from "material-ui";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export class Confirm extends Component {

    render() {
        const {
            values: {firstName, lastName, email, occupation, city, bio, painting},
            continues, back
        } = this.props;
        return (
            <React.Fragment>
                <AppBar title="Confirm User Details" iconClassNameLeft/>
                <List>
                    <ListItem primaryText="First Name" secondaryText={firstName}/>
                    <ListItem primaryText="Last Name" secondaryText={lastName}/>
                    <ListItem primaryText="Email" secondaryText={email}/>
                    <ListItem primaryText="painting" secondaryText={painting}/>
                    <ListItem primaryText="Occupation" secondaryText={occupation}/>
                    <ListItem primaryText="City" secondaryText={city}/>
                    <ListItem primaryText="Bio" secondaryText={bio}/>
                </List>
                <br/>
                <ArrowBackIcon
                    onClick={back}
                    fontSize="large"
                    className="nextMenu"
                />
                <ArrowForwardIcon
                    onClick={continues}
                    fontSize="large"
                    className="nextMenu"
                />
            </React.Fragment>
        );
    }
}

export default Confirm;
