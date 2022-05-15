import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@mui/material/Grid';
import StandaloneToggleButton from "./StandaloneToggleButton"
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ToggleButton from "@mui/material/ToggleButton";

export class PreferredArtTypes extends Component {
    render() {
        const {handleChoice, back, continues, state} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>what art types do you think that your spouse would like?</h1>
                <h2 className={"subHeader"}>so I'll know which categories of art supplies I should recommend.</h2>
                <br/>

                <StandaloneToggleButton
                    stateKey="painting"
                    handleChoice={handleChoice}
                    imgUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/painting.jpg"
                    state={state}
                >
                </StandaloneToggleButton>


                {/*<Grid container columns={2}*/}
                {/*      alignItems="center"*/}
                {/*      justifyContent="center"*/}
                {/*      direction="row"*/}
                {/*>*/}
                {/*    <Grid item xs={1}>*/}
                {/*        <StandaloneToggleButton*/}
                {/*            activity="painting"*/}
                {/*            handleToggleChange={handleToggleChange}*/}
                {/*            imageUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/painting.jpg">*/}
                {/*        </StandaloneToggleButton>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={1}>*/}
                {/*        <StandaloneToggleButton*/}
                {/*            activity="sketching"*/}
                {/*            handleToggleChange={handleToggleChange}*/}
                {/*            imageUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/sketching.jpg"*/}
                {/*        >*/}
                {/*        </StandaloneToggleButton>*/}
                {/*    </Grid>*/}

                {/*</Grid>*/}
                {/*<br/>*/}
                {/*<Grid container columns={2}*/}
                {/*      alignItems="center"*/}
                {/*      justifyContent="center"*/}
                {/*      direction="row"*/}
                {/*>*/}
                {/*    <Grid item xs={1}>*/}
                {/*        <StandaloneToggleButton*/}
                {/*            activity="writing"*/}
                {/*            handleToggleChange={handleToggleChange}*/}
                {/*            imageUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/writing.jpg"*/}
                {/*        >*/}
                {/*        </StandaloneToggleButton>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={1}>*/}
                {/*        <StandaloneToggleButton*/}
                {/*            activity="crafting"*/}
                {/*            handleToggleChange={handleToggleChange}*/}
                {/*            imageUrl="https://art-supplies.s3.eu-central-1.amazonaws.com/crafting.jpg"*/}
                {/*        >*/}
                {/*        </StandaloneToggleButton>*/}
                {/*    </Grid>*/}

                {/*</Grid>*/}
                {/*<br/>*/}
                <ArrowBackIcon
                    onClick={back}
                    fontSize="large"
                    className="nextMenu"
                />
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
