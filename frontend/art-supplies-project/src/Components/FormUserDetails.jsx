import React, {Component} from "react";
import {TextField, AppBar} from "material-ui";
import {MuiThemeProvider} from "material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export class FormUserDetails extends Component {
    render() {
        const {values, handleChange, continues} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="firstly - are you scared from your spouse and prefer a safe bet?" iconClassNameLeft/>
                    <br/>
                    <ToggleButtonGroup
                        value="Enter Your First Name"
                        onChange={handleChange("firstName")}
                        // aria-label="text formatting"
                    >
                        <ToggleButton value="bold" aria-label="bold">
                            <FormatBoldIcon/>
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label="italic">
                            <FormatItalicIcon/>
                        </ToggleButton>
                        <ToggleButton value="underlined" aria-label="underlined">
                            <FormatUnderlinedIcon/>
                        </ToggleButton>
                        <ToggleButton value="color" aria-label="color" disabled>
                            <FormatColorFillIcon/>
                            <ArrowDropDownIcon/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <br/>
                    <TextField
                        hintText="Enter Your last Name"
                        floatingLabelText="last Name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                    />
                    <br/>
                    <ArrowForwardIcon
                        onClick={continues}
                        fontSize='large'
                        className='nextMenu'
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;
