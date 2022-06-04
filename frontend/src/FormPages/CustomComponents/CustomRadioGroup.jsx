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
    LabelsList = (props) => {
        const choicesData = props.choicesData;
        return choicesData["choices"].map(function (choiceData, index) {
            return <FormControlLabel
                key={index}
                value={choiceData['value']}
                control={<Radio/>}
                label={choiceData['label']}/>
        })
    }

    render() {
        const {choicesData, handleChoice, state} = this.props
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
                <this.LabelsList
                    choicesData={choicesData}/>
            </RadioGroup>
        </React.Fragment>
    }

}

export default CustomRadioGroup;