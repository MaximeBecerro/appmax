import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Music extends Component {
    render() {
        return (
            <div className="music">
                <ReactAudioPlayer
                src="/song/devisee.mp3"
                autoPlay
                loop
                />
            </div>
        );
    }
}

export default Music;
