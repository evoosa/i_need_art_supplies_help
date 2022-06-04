import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CustomRadioGroup from "./CustomComponents/CustomRadioGroup";


export class MessyChoice extends Component {
    render() {
        const {choiceData, handleChoice, back, continues, state} = this.props
        return (
            <React.Fragment>
                <CustomRadioGroup
                    choicesData={choiceData}
                    handleChoice={handleChoice}
                    state={state}
                />
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

export default MessyChoice;
