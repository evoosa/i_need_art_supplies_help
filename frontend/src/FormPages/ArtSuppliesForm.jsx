import React, {Component} from "react";
import WelcomePage from "./WelcomePage";
import PreferredArtTypes from "./PreferredArtTypes";
import Approve from "./Approve"
import GetResults from "./GetResults";
import RadioGroupFormPage from "./CustomComponents/RadioGroupFormPage";
import {ChoicesData} from "./ChoicesData";


export class ArtSuppliesForm extends Component {
    state = {
        step: 1,
        crafting: false,
        painting: false,
        sketching: false,
        writing: false,
        compact: '2',
        likesExperimenting: '0',
        messy: '0',
        together: '2',
        safeBet: '1',
        firstClick: false
    };

    // Proceed to next step
    continues = (e) => {
        e.preventDefault();
        let {step} = this.state;
        this.setState({step: step + 1})
        console.log(this.state);
    };

    // Go back to prev step
    back = (e) => {
        e.preventDefault();
        const {step} = this.state;
        this.setState({
            step: step - 1,
        });
    };

    // Handle fields change
    handleChoice = (name, value) => {
        var newState = {}
        newState[name] = value
        this.setState(newState);
    };

    render() {
        const {step} = this.state;
        switch (step) {
            case 1:
                return (<WelcomePage
                    continues={this.continues}
                />);
            case 2:
                return (<RadioGroupFormPage
                    choicesData={ChoicesData.safeBet}
                    handleChoice={this.handleChoice}
                    state={this.state}
                    backCallback={this.back}
                    continueCallback={(e) => {
                        if (this.state.safeBet === '0') {
                            this.setState(
                                {step: 8},
                                () => {
                                    this.continues(e);
                                }
                            )
                        } else {
                            this.continues(e);
                        }
                    }}
                />);
            case 3:
                return (<PreferredArtTypes
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    handleChoice={this.handleChoice}
                />);
            case 4:
                return (<RadioGroupFormPage
                    choicesData={ChoicesData.compact}
                    handleChoice={this.handleChoice}
                    state={this.state}
                    backCallback={this.back}
                    continueCallback={this.continues}
                />);
            case 5:
                return (<RadioGroupFormPage
                    choicesData={ChoicesData.likesExperimenting}
                    handleChoice={this.handleChoice}
                    state={this.state}
                    backCallback={this.back}
                    continueCallback={this.continues}
                />);
            case 6:
                return (<RadioGroupFormPage
                    choicesData={ChoicesData.messy}
                    handleChoice={this.handleChoice}
                    state={this.state}
                    backCallback={this.back}
                    continueCallback={this.continues}
                />);
            case 7:
                return (<RadioGroupFormPage
                    choicesData={ChoicesData.together}
                    handleChoice={this.handleChoice}
                    state={this.state}
                    backCallback={this.back}
                    continueCallback={this.continues}
                />);
            case 8:
                return (<Approve
                    back={this.back}
                    continues={this.continues}
                />);
            case 9:
                return (<GetResults
                    state={this.state}
                />);
            default:
                return (
                    <div>hmmm dis is not supposed to happen</div>
                );
        }
    }
}

export default ArtSuppliesForm;