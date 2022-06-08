import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CustomRadioGroup from "./CustomComponents/CustomRadioGroup";


export class RadioGroupDynamicPage extends Component {
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
                    className="arrow"
                />
                <ArrowForwardIcon
                    onClick={continueCallback}
                    fontSize='large'
                    className='arrow'
                />
            </React.Fragment>
        );
    }
}

export default RadioGroupDynamicPage;
