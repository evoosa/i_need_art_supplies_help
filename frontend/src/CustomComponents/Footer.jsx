import React, {Component} from "react";
import MusicPlayer from "./MusicPlayer"

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="footer" className="footer">
                    <a className="footer-icon" href="https://www.instagram.com/evoosa.art/">
                        <img src={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "instagram.webp"}
                             width="30"
                             alt="instagram-logo"/>
                    </a>
                    <a className="footer-icon" href="https://visit.evoosa.art/">
                        <img src={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "o_transparent_compressed.webp"}
                             width="30"
                             alt="evoosa-o-logo"/>
                    </a>
                    <a className="footer-icon" href="https://www.linkedin.com/in/evaosher/">
                        <img src={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "linkedin_icon.webp"}
                             width="30"
                             alt="linkedin-icon"/>
                    </a>
                    <br/>
                    <MusicPlayer/>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
