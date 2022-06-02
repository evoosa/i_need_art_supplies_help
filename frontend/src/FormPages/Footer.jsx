import React, {Component} from "react";

export class Footer extends Component {
    playButtonOnClickHandler = e => {
        console.log(e);
        // var play_button = document.getElementById("play-audio-button");
        // var audio = document.getElementById('horrible-music');
        // if (play_button.className == 'is-playing') {
        //     play_button.className = "";
        //     play_button.innerHTML = "Play"
        //     console.log('pausing');
        //     audio.pause();
        // } else {
        //     play_button.className = "is-playing";
        //     play_button.innerHTML = "Pause";
        //     console.log('playing');
        //     audio.play();
        // }
    }

    render() {
        return (
            <React.Fragment>
                <div id="footer" className="footer">
                    <a className="footer-icon" href="https://www.instagram.com/evoosa.art/">
                        <img src="https://evoosa-art.s3.eu-central-1.amazonaws.com/static/images/instagram.webp"
                             width="30"/>
                    </a>
                    <a className="footer-icon" href="https://visit.evoosa.art/">
                        <img src="https://evoosa-art.s3.eu-central-1.amazonaws.com/static/images/o_transparent.webp"
                             width="30"/>
                    </a>
                    <button id="play-audio-button" onClick={this.playButtonOnClickHandler}>Play</button>
                    <audio id="horrible-music" hidden controls>
                        <source src="https://art-supplies-images.pasten.life/horrible_music.mp3" type="audio/mpeg"/>
                        {/*<p>If you are reading this, it is because your browser does not support the audio element.</p>*/}
                    </audio>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
