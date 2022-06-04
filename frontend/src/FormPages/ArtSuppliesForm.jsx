import React, {Component} from "react";
import PreferredArtTypes from "./PreferredArtTypes";
import SafeBetChoice from "./SafeBetChoice";
import WelcomePage from "./WelcomePage";
import CompactChoice from "./CompactChoice"
import LikesExperimentingChoice from "./LikesExperimentingChoice"
import MessyChoice from "./MessyChoice"
import TogetherChoice from "./TogetherChoice"
import Approve from "./Approve"
import GetResults from "./GetResults";
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

    radio_button_sx_override = {
        '& .MuiFormControlLabel-label': {
            fontFamily: 'system-ui',
        },
    }
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
    handleChoice = (e) => {
        var newState = {}
        newState[e.target.name] = e.target.value
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
                return (<SafeBetChoice
                    choiceData={ChoicesData.safeBet}
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    setState={this.setState.bind(this)}
                />);
            case 3:
                return (<PreferredArtTypes
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    setState={this.setState.bind(this)}
                />);
            case 4:
                return (<CompactChoice
                    choiceData={ChoicesData.compact}
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                />);
            case 5:
                return (<LikesExperimentingChoice
                    choiceData={ChoicesData.likesExperimenting}
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                />);
            case 6:
                return (<MessyChoice
                    choiceData={ChoicesData.messy}
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                />);
            case 7:
                return (<TogetherChoice
                    choiceData={ChoicesData.together}
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
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
                    <div>hmm dis is not supposed to happen</div>
                );
        }
    }
}

export default ArtSuppliesForm;