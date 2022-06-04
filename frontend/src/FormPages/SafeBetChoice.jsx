import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CustomRadioGroup from "./CustomComponents/CustomRadioGroup";

export class SafeBetChoice extends Component {
    render() {
        const {choiceData, handleChoice, back, continues, state, setState} = this.props
        return (
            <React.Fragment>
                <CustomRadioGroup
                    choicesData={choiceData}
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
                    onClick={(e) => {
                        if (state.safeBet === '0') {
                            setState(
                                {step: 8},
                                () => {
                                    continues(e);
                                }
                            )
                        } else {
                            continues(e);
                        }
                    }}
                    fontSize='large'
                    className='next-menu'
                />
            </React.Fragment>
        );
    }
}

export default SafeBetChoice;
