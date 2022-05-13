import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export class WelcomePage extends Component {
    render() {
        const {continues} = this.props
        return (
            <React.Fragment>
                <br/>
                <h2 className={"subHeader mainSubHeader_1"}>"Hey Eva, I'd love to consult you, </h2>
                <h1 className={"mainHeader"}>What art supplies should I buy my GF for her birthday? </h1>
                <h2 className={"subHeader mainSubHeader_1"}>She showed interest in painting lately, and I wanna surprise
                    her. What
                    should I get her?"</h2>
                <img className="phoneLadyImg" src="https://art-supplies.s3.eu-central-1.amazonaws.com/phone-lady.jpg"/>
                <br/>
                <br/>
                <h3 className={"subHeader mainSubHeader_2"}>Hmmm...</h3>
                <h3 className={"subHeader mainSubHeader_2"}>I need to ask you some questions first.</h3>
                <br/>
                <ArrowForwardIcon
                    onClick={continues}
                    fontSize='large'
                    className='nextMenu'
                />
            </React.Fragment>
        );
    }
}

export default WelcomePage;
