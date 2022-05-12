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
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import Grid from '@mui/material/Grid';
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import {useState} from "react";
import StandaloneToggleButton from "./StandaloneToggleButton"

export class PreferredArtTypes extends Component {
    render() {
        const {handleToggleChange, continues, state} = this.props
        return (
            <MuiThemeProvider>

                <React.Fragment>

                    <AppBar title="firstly - are you scared from your spouse and prefer a safe bet?" iconClassNameLeft/>
                    <br/>
                    <Grid container columns={2}
                          alignItems="center"
                          justifyContent="center"
                          direction="row"
                    >
                        <Grid item xs={1}>
                            <StandaloneToggleButton
                                activity="painting"
                                handleToggleChange={handleToggleChange}
                                state={state}
                                imageUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/painting.jpg">
                            </StandaloneToggleButton>
                        </Grid>
                        <Grid item xs={1}>
                            <StandaloneToggleButton
                                activity="sketching"
                                handleToggleChange={handleToggleChange}
                                state={state}
                                imageUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/sketching.jpg"
                            >
                            </StandaloneToggleButton>
                        </Grid>

                    </Grid>
                    <br/>

                    <Grid container columns={2}
                          alignItems="center"
                          justifyContent="center"
                          direction="row"
                    >
                        <Grid item xs={1}>
                            <StandaloneToggleButton
                                activity="writing"
                                handleToggleChange={handleToggleChange}
                                state={state}
                                imageUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/writing.jpg"
                            >
                            </StandaloneToggleButton>
                        </Grid>
                        <Grid item xs={1}>
                            <StandaloneToggleButton
                                activity="crafting"
                                handleToggleChange={handleToggleChange}
                                state={state}
                                imageUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/crafting.jpg"
                            >
                            </StandaloneToggleButton>
                        </Grid>

                    </Grid>
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

export default PreferredArtTypes;
