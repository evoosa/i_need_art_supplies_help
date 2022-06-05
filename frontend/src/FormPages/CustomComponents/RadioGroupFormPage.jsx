import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CustomRadioGroup from "./CustomRadioGroup";


export class RadioGroupFormPage extends Component {
    render() {
        const {choicesData, handleChoice, state, backCallback, continueCallback} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>{choicesData['mainHeader']}</h1>
                <h2 className={"sub-header"}>{choicesData['subHeader']}</h2>
                <br/>
                <CustomRadioGroup
                    choicesData={choicesData}
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

export default RadioGroupFormPage;
