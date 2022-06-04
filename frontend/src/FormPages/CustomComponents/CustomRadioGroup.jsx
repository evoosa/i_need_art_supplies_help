import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const radio_button_sx_override = {
    '& .MuiFormControlLabel-label': {
        fontFamily: 'system-ui',
    },
}

export class CustomRadioGroup extends React.Component {
    render() {
        const {choicesData, handleChoice, state} = this.props
        const LabelsList = React.memo(() => choicesData["choices"].map(function (choiceData, index) {
            console.log(choiceData)
            return <FormControlLabel
                key={index}
                value={choiceData['value']}
                control={<Radio/>}
                label={choiceData['label']}/>

        }), [])

        return <React.Fragment>
            <h1 className={"header"}>{choicesData['mainHeader']}</h1>
            <h2 className={"sub-header"}>{choicesData['subHeader']}</h2>
            <br/>
            <RadioGroup
                sx={radio_button_sx_override}
                className="choice-radio-group"
                value={state[choicesData["name"]]}
                name={choicesData["name"]}
                onChange={handleChoice}
            >
                <LabelsList/>
            </RadioGroup>
        </React.Fragment>
    }

}

export default CustomRadioGroup;