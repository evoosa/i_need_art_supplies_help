import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@mui/material/Grid';
import ArtTypeToggleButton from "./CustomComponents/ArtTypeToggleButton"
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export class PreferredArtTypes extends Component {
    render() {
        const {back, continues, state, setState} = this.props
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
                            imgUrl="https://art-supplies-images.pasten.life/images/painting_compressed.webp"
                            state={state}
                            setState={setState}
                        >
                        </ArtTypeToggleButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ArtTypeToggleButton
                            stateKey="sketching"
                            imgUrl="https://art-supplies-images.pasten.life/images/sketching_compressed.webp"
                            state={state}
                            setState={setState}
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
                            imgUrl="https://art-supplies-images.pasten.life/images/writing_compressed.webp"
                            state={state}
                            setState={setState}
                        >
                        </ArtTypeToggleButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ArtTypeToggleButton
                            stateKey="crafting"
                            imgUrl="https://art-supplies-images.pasten.life/images/crafting_compressed.webp"
                            state={state}
                            setState={setState}
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
