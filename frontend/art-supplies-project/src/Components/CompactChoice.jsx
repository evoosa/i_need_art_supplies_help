import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


export class CompactChoice extends Component {
    render() {
        const {handleChoice, back, continues, state, sx_override} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>Does she plan to carry the supplies with her, or will she use them
                    indoors?</h1>
                <h2 className={"sub-header"}>if she'll carry them with her, she'll need them to be compact</h2>
                <br/>
                <RadioGroup
                    sx={sx_override}
                    className="choice-radio-group"
                    defaultValue={state["compact"]}
                    name="compact"
                    onChange={handleChoice}
                >
                    <FormControlLabel
                        value="0"
                        // sx={}
                        control={<Radio/>}
                        label="She'll carry the supplies with her"/>
                    <FormControlLabel
                        value="1"
                        control={<Radio/>}
                        label="She'll create only indoors"/>
                    <FormControlLabel
                        value="2"
                        control={<Radio/>}
                        label="Both are good"/>
                </RadioGroup>
                <br/>
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

export default CompactChoice;
