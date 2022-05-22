import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export class WelcomePage extends Component {
    render() {
        const {continues} = this.props
        return (
            <React.Fragment>
                <br/>
                <h2 className={"sub-header main-sub-header-1"}>"Hey Eva, I'd love to consult you, </h2>
                <h1 className={"main-header"}>What art supplies should I buy my GF for her birthday? </h1>
                <h2 className={"sub-header main-sub-header-1"}>She showed interest in painting lately, and I wanna surprise
                    her. What
                    should I get her?"</h2>
                <img className="phone-lady-img" src="https://i-need-art-supplies-help-me.pasten.life/phone-lady.jpg"/>
                <br/>
                <br/>
                <h3 className={"sub-header main-sub-header-2"}>Hmmm...</h3>
                <h3 className={"sub-header main-sub-header-2"}>I need to ask you some questions first.</h3>
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
