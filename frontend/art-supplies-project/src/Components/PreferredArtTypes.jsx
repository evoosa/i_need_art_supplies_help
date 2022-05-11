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
        const {handleChange, values, continues, state} = this.props
        return (
            <MuiThemeProvider>

                <React.Fragment>

                    <AppBar title="firstly - are you scared from your spouse and prefer a safe bet?" iconClassNameLeft/>
                    <br/>

                    <StandaloneToggleButton
                        activity="painting"
                        handleChange={handleChange}
                        state={state}
                    >
                    </StandaloneToggleButton>

                    {/*<ToggleButtonGroup*/}
                    {/*    value={values.painting}*/}
                    {/*    onChange={handleChange('painting') }*/}
                    {/*    name="date"*/}
                    {/*    id="date-select"*/}
                    {/*    exclusive={true}*/}
                    {/*    size="small">*/}
                    {/*    <ToggleButton value="today">Today</ToggleButton>*/}
                    {/*    <ToggleButton value="tomorrow">Tomorrow</ToggleButton>*/}
                    {/*    <ToggleButton value="week">This week</ToggleButton>*/}
                    {/*</ToggleButtonGroup>*/}

                    {/*<ToggleButton on onChange={values['']} value="1">Web</ToggleButton>*/}
                    {/*<ToggleButton value="android">Android</ToggleButton>*/}
                    {/*<ToggleButton value="ios">iOS</ToggleButton>*/}


                    {/*<Button*/}
                    {/*    variant="contained"*/}
                    {/*    color="secondary"*/}
                    {/*    startIcon={<Avatar src={'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'} />}*/}
                    {/*>*/}
                    {/*    Delete*/}
                    {/*</Button>*/}
                    {/*<Grid container rowSpacing={0} columns={2} >*/}
                    {/*    <Grid item xs={2}>*/}
                    {/*        <ToggleButton value="center"*/}
                    {/*                      className="toggleButton"*/}
                    {/*                      aria-label="centered">*/}
                    {/*        </ToggleButton>*/}
                    {/*        <ToggleButton value="center"*/}
                    {/*                      aria-label="centered">*/}
                    {/*        </ToggleButton>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    {/*<Grid container rowSpacing={0} columns={2} >*/}
                    {/*    <Grid item xs={2}>*/}
                    {/*        <ToggleButton value="center"*/}
                    {/*                      aria-label="centered">*/}
                    {/*        </ToggleButton>*/}
                    {/*        <ToggleButton value="center"*/}
                    {/*                      aria-label="centered">*/}
                    {/*        </ToggleButton>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    {/*<ToggleButtonGroup*/}
                    {/*    // value={currentAlignment}*/}
                    {/*    // onChange={(event, newAlignment) => {*/}
                    {/*    //     setCurrentAlignment(newAlignment);*/}
                    {/*    // }}*/}
                    {/*    // exclusive*/}
                    {/*    // aria-label="Demo Text Alignment"*/}
                    {/*>*/}

                    {/*    <ToggleButton value="left"*/}
                    {/*                  aria-label="left aligned">*/}
                    {/*    </ToggleButton>*/}
                    {/*    <ToggleButton value="center"*/}
                    {/*                  aria-label="centered">*/}
                    {/*    </ToggleButton>*/}
                    {/*</ToggleButtonGroup>*/}
                    {/*<ToggleButtonGroup*/}
                    {/*    value="Enter Your First Name"*/}
                    {/*    onChange={handleChange("firstName")}*/}
                    {/*    // aria-label="text formatting"*/}
                    {/*>*/}
                    {/*    <ToggleButton value="bold" aria-label="bold">*/}
                    {/*        <FormatBoldIcon/>*/}
                    {/*    </ToggleButton>*/}
                    {/*    <ToggleButton value="italic" aria-label="italic">*/}
                    {/*        <FormatItalicIcon/>*/}
                    {/*    </ToggleButton>*/}
                    {/*    <ToggleButton value="underlined" aria-label="underlined">*/}
                    {/*        <FormatUnderlinedIcon/>*/}
                    {/*    </ToggleButton>*/}
                    {/*    <ToggleButton value="color" aria-label="color" disabled>*/}
                    {/*        <FormatColorFillIcon/>*/}
                    {/*        <ArrowDropDownIcon/>*/}
                    {/*    </ToggleButton>*/}
                    {/*</ToggleButtonGroup>*/}
                    <br/>
                    <TextField // TODO - DELETE
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

export default PreferredArtTypes;
