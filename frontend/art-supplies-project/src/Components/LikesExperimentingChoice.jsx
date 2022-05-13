import React, {Component} from "react";
import {MuiThemeProvider} from "material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export class LikesExperimentingChoice extends Component {
    render() {
        const {handleChoice, continues} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1 className={"header"}>Does she like experimenting with new materials and techniques?</h1>
                    <br/>
                    <RadioGroup
                        className="choiceRadioGroup"
                        defaultValue="0"
                        name="likesExperimenting"
                        onChange={handleChoice}
                    >
                        <FormControlLabel
                            value="0"
                            control={<Radio/>}
                            label="Yes"/>
                        <FormControlLabel
                            value="1"
                            control={<Radio/>}
                            label="No"/>
                        <FormControlLabel
                            value="2"
                            control={<Radio/>}
                            label="I Don't Know"/>
                    </RadioGroup>
                    <br/>
                    <br/>
                    <ArrowForwardIcon
                        onClick={continues}
                        fontSize='large'
                        className='nextMenu'
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
            ;
    }
}

export default LikesExperimentingChoice;
