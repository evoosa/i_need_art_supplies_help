import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CustomRadioGroup from "./CustomComponents/CustomRadioGroup"


var choices_test = {
    "name": "togetherTest",
    "mainHeader": "are you guys into a one-time couples experience, or do you intend for her to use the materials to create by herself?",
    "subHeader": "I have some ideas for art experiences you can enjoy together",
    "choices": [
        {
            "value": "0",
            "label": "We're into a couples Experience 💑"
        },
        {
            "value": "1",
            "label": "The materials are for her personal use"
        },
        {
            "value": "2",
            "label": "It doesn't matter"
        },
    ]
}

export class TogetherChoice extends Component {
    render() {
        const {handleChoice, back, continues, state} = this.props
        return (
            <React.Fragment>
                <CustomRadioGroup
                    choicesData={choices_test}
                    handleChoice={handleChoice}
                    state={state}
                />
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

export default TogetherChoice;
