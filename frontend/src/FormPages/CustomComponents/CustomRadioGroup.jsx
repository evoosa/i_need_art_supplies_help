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
                label={choiceData['label']}
                sx={choiceData['sx']}
            />
        })
    }

    render() {
        const {choicesData, handleChoice, state} = this.props
        return <React.Fragment>
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
            <br/>
            <br/>
        </React.Fragment>
    }

}

export default CustomRadioGroup;