import React, {Component} from "react";
import PreferredArtTypes from "./PreferredArtTypes";
import FormPersonalDetails from "./FormPersonalDetails";
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
        painting: '3',
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
    handleChange = (input) => (e) => {
        this.setState({[input]: e.target.value});
        // console.log(input + " " + e.target.value)
        console.log(e)
    };

    handleChange_2 = (key, val) => (e) => {
        this.state.preferredArtTypes[key] = val
        console.log(this.state.preferredArtTypes)
    };

    render() { // TODO - remove email
        const {step} = this.state;
        const {preferredArtTypes, compact, likesExperimenting, messy, together, safeBet, email} = this.state;
        const values = {preferredArtTypes, compact, likesExperimenting, messy, together, safeBet, email};

        switch (step) {
            case 1:
                return (
                    <PreferredArtTypes
                        handleChange={this.handleChange_2}
                        values={values}
                        continues={this.continues}
                        state={this.state}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        handleChange={this.handleChange}
                        values={values}
                        back={this.back}
                        continues={this.continues}
                    />
                );
            case 3:
                return (
                    <Confirm
                        values={values}
                        back={this.back}
                        continues={this.continues}
                    />
                );
            case 4:
                return <Success/>;
        }
    }
}

export default ArtSuppliesForm;