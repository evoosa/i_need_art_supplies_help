import React, {Component} from "react";

export class MusicPlayer extends Component {
    playButtonOnClickHandler = e => {
        var audio = document.getElementById('horrible-music');
        if (audio.className === 'playing') {
            audio.className = "paused";
            e.target.innerHTML = "Play"
            audio.pause();
        } else {
            audio.className = "playing";
            e.target.innerHTML = "Pause";
            audio.play();
        }
    }

    render() {
        return (
            <React.Fragment>
                <button id="play-audio-button" className={'music-player-button'} onClick={this.playButtonOnClickHandler}>Play</button>
                <audio id="horrible-music" hidden controls>
                    <source src="https://art-supplies-images.pasten.life/horrible_music.mp3" type="audio/mpeg"/>
                </audio>
            </React.Fragment>
        );
    }
}

export default MusicPlayer;
