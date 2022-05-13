import React, {Component} from "react";
import {MuiThemeProvider} from "material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export class CompactChoice extends Component {
    render() {
        const {handleChoice, continues} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1 className={"header"}>Does she plan to carry the supplies with her, or will she use them
                        indoors?</h1>
                    <h2 className={"subHeader"}>if she'll carry them with her, she'll need them to be compact</h2>
                    <br/>
                    <RadioGroup
                        className="choiceRadioGroup"
                        defaultValue="2"
                        name="compact"
                        onChange={handleChoice}
                    >
                        <FormControlLabel
                            value="0"
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

export default CompactChoice;
