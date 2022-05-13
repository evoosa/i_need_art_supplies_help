import React, {Component} from "react";
import {MuiThemeProvider} from "material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export class SafeBetChoice extends Component {
    render() {
        const {handleChoice, continues} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>finally - are you afraid of your spouse and prefer a safe bet?</h1>
                <h2 className={"subHeader"}>I don't recommend a safe bet since it narrows your options, but I get
                    you 🤷</h2>
                <br/>
                <RadioGroup
                    className="choiceRadioGroup"
                    defaultValue="1"
                    name="safeBet"
                    onChange={handleChoice}
                >
                    <FormControlLabel
                        value="1"
                        control={<Radio/>}
                        sx={{
                            color: "green"
                        }}
                        label="No 😊"/>
                    <FormControlLabel
                        value="0"
                        control={<Radio/>}
                        label="Yes, I prefer a Safe Bet"/>
                </RadioGroup>
                <br/>
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

export default SafeBetChoice;
