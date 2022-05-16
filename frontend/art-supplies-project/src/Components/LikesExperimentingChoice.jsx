import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export class LikesExperimentingChoice extends Component {
    render() {
        const {handleChoice, continues, state} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>Does she like experimenting with new materials and techniques?</h1>
                <br/>
                <RadioGroup
                    className="choice-radio-group"
                    defaultValue={state["likesExperimenting"]}
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
                    className='next-menu'
                />
            </React.Fragment>
        );
    }
}

export default LikesExperimentingChoice;
