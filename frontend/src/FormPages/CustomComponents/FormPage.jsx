import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CustomRadioGroup from "./CustomRadioGroup";


export class FormPage extends Component {
    render() {
        const {choiceData, handleChoice, state, backCallback, continueCallback} = this.props
        return (
            <React.Fragment>
                <CustomRadioGroup
                    choicesData={choiceData}
                    handleChoice={handleChoice}
                    state={state}
                />
                <ArrowBackIcon
                    onClick={backCallback}
                    fontSize="large"
                    className="next-menu"
                />
                <ArrowForwardIcon
                    onClick={continueCallback}
                    fontSize='large'
                    className='next-menu'
                />

            </React.Fragment>
        );
    }
}

export default FormPage;
