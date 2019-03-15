import React, { Component } from 'react';

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
                <audio autoplay loop>
                    <source src="song/11 De Visée - Suite in C minor (La Plainte, ou Tombeau de Mesdemoiselles de Visée, filles de l'auteur).mp3" />
                </audio>
            </div>
        );
    }
}

export default Music;
