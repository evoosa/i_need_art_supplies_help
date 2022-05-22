import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export class TogetherChoice extends Component {
    render() {
        const {handleChoice, continues, state, sx_override} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>are you guys into a one-time couples experience, or do you intend for her to use the materials to create by herself?</h1>
                <h2 className={"sub-header"}>I have some ideas for art experiences you can enjoy together</h2>
                <br/>
                <RadioGroup
                    sx={sx_override}
                    className="choice-radio-group"
                    defaultValue={state["together"]}
                    name="together"
                    onChange={handleChoice}
                >
                    <FormControlLabel
                        value="2"
                        control={<Radio/>}
                        label="It doesn't matter"/>
                    <FormControlLabel
                        value="1"
                        control={<Radio/>}
                        label="The materials are for her personal use"/>
                    <FormControlLabel
                        value="0"
                        control={<Radio/>}
                        label="We're into a couples Experience 💑"/>
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

export default TogetherChoice;
