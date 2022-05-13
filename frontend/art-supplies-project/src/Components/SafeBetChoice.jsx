import React, {Component} from "react";
import {MuiThemeProvider} from "material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const style =
    {
        color: "#ffffff",
        fontSize: "150px",
        textTransform: "lowercase",
        fontWeight: "bold",
        fontFamily: "system-ui"
    }

export class SafeBetChoice extends Component {
    render() {
        const {handleChoice, continues} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1 className={"header"}>first of all - are you afraid of your spouse and prefer a safe bet?</h1>
                    <h2 className={"subHeader"}>I don't recommend a safe bet since it narrows your options, but I get
                        you 🤷</h2>
                    <br/>
                    <RadioGroup
                        className="choiceRadioGroup"
                        aria-labelledby="demo-radio-buttons-group-label"
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
                            sx={{
                                color: "#de79b1"
                            }}
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
            </MuiThemeProvider>
        )
            ;
    }
}

export default SafeBetChoice;
