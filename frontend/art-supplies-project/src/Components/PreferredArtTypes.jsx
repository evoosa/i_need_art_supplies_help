import React, {Component} from "react";
import {MuiThemeProvider} from "material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@mui/material/Grid';
import StandaloneToggleButton from "./StandaloneToggleButton"

export class PreferredArtTypes extends Component {
    render() {
        const {handleToggleChange, continues, state} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>what art types do you think that your spouse would like?</h1>
                <h2 className={"subHeader"}>so I'll know which categories of art supplies I should recommend.</h2>
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
        );
    }
}

export default PreferredArtTypes;
