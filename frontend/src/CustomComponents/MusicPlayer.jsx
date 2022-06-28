import React, {Component} from "react";

const audioPlayingColor = "#ECA0C0";
const audioPausedColor = "transparent";

export function playMusic() {
    var audio = document.getElementById('horrible-music');
    var play_audio_button = document.getElementById("play-audio-button");
    audio.play();
    play_audio_button.innerHTML = "Pause";
    play_audio_button.style.background = audioPlayingColor;
    audio.className = "playing";
}

export class MusicPlayer extends Component {
    playButtonOnClickHandler = e => {
        var audio = document.getElementById('horrible-music');
        if (audio.className === 'playing') {
            audio.className = "paused";
            e.target.style.background = audioPausedColor;
            e.target.innerHTML = "Play"
            audio.pause();
        } else {
            audio.className = "playing";
            e.target.innerHTML = "Pause";
            e.target.style.background = audioPlayingColor;
            audio.play();
        }
    }

    render() {
        return (
            <React.Fragment>
                <button id="play-audio-button" className={'music-player-button'}
                        onClick={this.playButtonOnClickHandler}>Play
                </button>
                <audio id="horrible-music" hidden controls>
                    <source src={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + "horrible_music.mp3"} type="audio/mpeg"/>
                </audio>
            </React.Fragment>
        );
    }
}

export default MusicPlayer;
