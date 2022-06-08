import React, {Component} from "react";
import WelcomePage from "./WelcomePage";
import PreferredArtTypesPage from "./PreferredArtTypesPage";
import Approve from "./Approve"
import GetResultsPage from "./GetResultsPage";
import RadioGroupDynamicPage from "./RadioGroupDynamicPage";
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
                return (<RadioGroupDynamicPage
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
                return (<PreferredArtTypesPage
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    handleChoice={this.handleChoice}
                />);
            case 4:
                return (<RadioGroupDynamicPage
                    choicesData={ChoicesData.compact}
                    handleChoice={this.handleChoice}
                    state={this.state}
                    backCallback={this.back}
                    continueCallback={this.continues}
                />);
            case 5:
                return (<RadioGroupDynamicPage
                    choicesData={ChoicesData.likesExperimenting}
                    handleChoice={this.handleChoice}
                    state={this.state}
                    backCallback={this.back}
                    continueCallback={this.continues}
                />);
            case 6:
                return (<RadioGroupDynamicPage
                    choicesData={ChoicesData.messy}
                    handleChoice={this.handleChoice}
                    state={this.state}
                    backCallback={this.back}
                    continueCallback={this.continues}
                />);
            case 7:
                return (<RadioGroupDynamicPage
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
                return (<GetResultsPage
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