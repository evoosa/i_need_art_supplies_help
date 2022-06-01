import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export class WelcomePage extends Component {
    render() {
        const {continues} = this.props
        return (
            <React.Fragment>
                <br/>
                <h2 className={"sub-header main-sub-header-1"}>"Hey Eva, I'd love to consult you, </h2>
                <h1 className={"main-header"}>Which art supplies should I get my GF for her birthday? 🥺</h1>
                <h2 className={"sub-header main-sub-header-1"}>She expressed interest in art lately, and I'd like to surprise her. What should I buy her?"</h2>
                <img className="phone-lady-img" src="https://art-supplies-images.pasten.life/images/phone-lady_compressed.webp"/>
                <br/>
                <br/>
                <h3 className={"sub-header main-sub-header-2"}>Hmmm... 🤔</h3>
                <h3 className={"sub-header main-sub-header-2"}>I need to ask you a few questions first.</h3>
                <br/>
                <ArrowForwardIcon
                    onClick={continues}
                    fontSize='large'
                    className='next-menu'
                />
            </React.Fragment>
        );
    }
}

export default WelcomePage;
