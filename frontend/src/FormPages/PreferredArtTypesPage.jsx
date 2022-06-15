import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@mui/material/Grid';
import ArtTypeToggleButton from "../CustomComponents/ArtTypeToggleButton"
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export class PreferredArtTypesPage extends Component {
    render() {
        const {back, continues, state, handleChoice} = this.props
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
                            imgUrl={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "painting_compressed_50.webp"}
                            state={state}
                            handleChoice={handleChoice}
                        >
                        </ArtTypeToggleButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ArtTypeToggleButton
                            stateKey="sketching"
                            imgUrl={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "sketching_compressed_50.webp"}
                            state={state}
                            handleChoice={handleChoice}
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
                            imgUrl={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "writing_compressed_50.webp"}
                            state={state}
                            handleChoice={handleChoice}
                        >
                        </ArtTypeToggleButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ArtTypeToggleButton
                            stateKey="crafting"
                            imgUrl={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "crafting_compressed_50.webp"}
                            state={state}
                            handleChoice={handleChoice}
                        >
                        </ArtTypeToggleButton>
                    </Grid>

                </Grid>
                <br/>
                <ArrowBackIcon
                    onClick={back}
                    fontSize="large"
                    className="arrow"
                />
                <ArrowForwardIcon
                    onClick={continues}
                    fontSize='large'
                    className='arrow'
                />
            </React.Fragment>
        );
    }
}

export default PreferredArtTypesPage;
