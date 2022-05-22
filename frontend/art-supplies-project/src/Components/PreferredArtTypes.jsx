import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@mui/material/Grid';
import ArtTypeToggleButton from "./ArtTypeToggleButton"
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export class PreferredArtTypes extends Component {
    render() {
        const {handleChoice, back, continues, state} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>which types of art do you think your partner would like? </h1>
                <h2 className={"sub-header"}>so I'll know which categories of art supplies I should recommend.</h2>
                <br/>
                <Grid container columns={2}
                      alignItems="center"
                      justifyContent="center"
                      direction="row"
                >
                    <Grid item xs={1}>
                        <ArtTypeToggleButton
                            stateKey="painting"
                            handleChoice={handleChoice}
                            imgUrl="https://i-need-art-supplies-help-me.pasten.life/painting.jpg"
                            state={state}
                        >
                        </ArtTypeToggleButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ArtTypeToggleButton
                            stateKey="sketching"
                            handleChoice={handleChoice}
                            imgUrl="https://i-need-art-supplies-help-me.pasten.life/sketching.jpg"
                            state={state}
                        >
                        </ArtTypeToggleButton>
                    </Grid>

                </Grid>
                <br/>
                <Grid container columns={2}
                      alignItems="center"
                      justifyContent="center"
                      direction="row"
                >
                    <Grid item xs={1}>
                        <ArtTypeToggleButton
                            stateKey="writing"
                            handleChoice={handleChoice}
                            imgUrl="https://i-need-art-supplies-help-me.pasten.life/writing.jpg"
                            state={state}
                        >
                        </ArtTypeToggleButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ArtTypeToggleButton
                            stateKey="crafting"
                            handleChoice={handleChoice}
                            imgUrl="https://i-need-art-supplies-help-me.pasten.life/crafting.jpg"
                            state={state}
                        >
                        </ArtTypeToggleButton>
                    </Grid>

                </Grid>
                <br/>
                <ArrowBackIcon
                    onClick={back}
                    fontSize="large"
                    className="next-menu"
                />
                <ArrowForwardIcon
                    onClick={continues}
                    fontSize='large'
                    className='next-menu'
                />
            </React.Fragment>
        );
    }
}

export default PreferredArtTypes;
