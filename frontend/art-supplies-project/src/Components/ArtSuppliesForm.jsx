import React, {Component} from "react";
import PreferredArtTypes from "./PreferredArtTypes";
import SafeBetChoice from "./SafeBetChoice"
import Confirm from "./Confirm";
import Success from "./Success";

export class ArtSuppliesForm extends Component {
    state = {
        step: 1,
        preferredArtTypes: {
            "crafting": 1,
            "painting": 1,
            "sketching": 1,
            "writing": 1
        },
        compact: '1',
        painting: '1',
        likesExperimenting: '1',
        messy: '1',
        together: '1',
        safeBet: '1',
        email: ''
    };

    // Proceed to next step
    continues = (e) => {
        e.preventDefault();
        const {step} = this.state;
        this.setState({
            step: step + 1,
        });
        console.log(this.state)
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
        console.log(this.state)
    };

    handleArtTypeToggleChange = (key, val) => {
        this.state.preferredArtTypes[key] = val
        console.log(this.state.preferredArtTypes)
    };

    render() {
        const {step} = this.state;
        const {preferredArtTypes, compact, likesExperimenting, messy, together, safeBet, email} = this.state;
        const values = {preferredArtTypes, compact, likesExperimenting, messy, together, safeBet, email};
        switch (step) {
            case 1:
                return (
                    <PreferredArtTypes
                        handleToggleChange={this.handleArtTypeToggleChange}
                        continues={this.continues}
                        state={this.state}
                    />
                );
            case 2:
                return (
                    <SafeBetChoice
                        handleChoice={this.handleChoice}
                        continues={this.continues}
                    />
                );
            case 3:
                return (
                    <Confirm
                        values={values}
                        continues={this.continues}
                    />
                );
            case 4:
                return <Success/>;
        }
    }
}

export default ArtSuppliesForm;