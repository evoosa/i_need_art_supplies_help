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
        this.state[e.target.name] = e.target.value
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
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    setState={this.setState.bind(this)}
                    sx_override={this.radio_button_sx_override}
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
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    sx_override={this.radio_button_sx_override}
                />);
            case 5:
                return (<LikesExperimentingChoice
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    sx_override={this.radio_button_sx_override}
                />);
            case 6:
                return (<MessyChoice
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    sx_override={this.radio_button_sx_override}
                />);
            case 7:
                return (<TogetherChoice
                    handleChoice={this.handleChoice}
                    back={this.back}
                    continues={this.continues}
                    state={this.state}
                    sx_override={this.radio_button_sx_override}
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
        }
    }
}

export default ArtSuppliesForm;