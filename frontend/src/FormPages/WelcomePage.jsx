import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {playMusic} from "./CustomComponents/MusicPlayer"

export class WelcomePage extends Component {
    render() {
        const {continues} = this.props
        return (
            <React.Fragment>
                <br/>
                <h2 className={"sub-header friend-quote-sub-header"}>"Hey Eva, I'd love to consult you, </h2>
                <h1 className={"welcome-page-header"}>Which art supplies should I get my GF for her birthday? 🥺</h1>
                <h2 className={"sub-header friend-quote-sub-header"}>She expressed interest in art lately, and I'd like to
                    surprise her. What should I buy her?"</h2>
                <img className="loading-img phone-lady-img"
                     src={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "phone-lady_compressed.webp"}
                     alt={"phone-lady"}
                />
                <br/>
                <br/>
                <h3 className={"sub-header me-quote-sub-header"}>Hmmm... 🤔</h3>
                <h3 className={"sub-header me-quote-sub-header"}>I need to ask you a few questions first.</h3>
                <br/>
                <ArrowForwardIcon
                    id={'first-forward-icon'}
                    onClick={(e) => {
                        playMusic();
                        continues(e);
                    }}
                    fontSize='large'
                    className='arrow'
                />
            </React.Fragment>
        );
    }
}

export default WelcomePage;
