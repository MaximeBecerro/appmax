import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [
                {
                    url: "/song/11 De Visée - Suite in C minor (La Plainte, ou Tombeau de Mesdemoiselles de Visée, filles de l'auteur).wma"
                }
            ],
        };
    }
    render() {
        return (
            <div className="music">
                <ReactAudioPlayer
                src="devisee.mp3"
                autoPlay
                />
            </div>
        );
    }
}

export default Music;
