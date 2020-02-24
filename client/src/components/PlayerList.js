import React from 'react';

import PlayerCard from './PlayerCard';
import ToggleDark from "./ToggleDark";

class PlayerList extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/players')
            .then(response => response.json())
            .then(players => this.setState({ players }))
            .catch(error => console.log("Error fetching: ", error))
    }

    render() {
        console.log(this.state.players);
        return (
            <div>
                <h1>Women's World Cup players' search rankings</h1>
                <ToggleDark />
                <div className='player-container'>
                {this.state.players.map(player => (
                    <PlayerCard 
                    key={player.id}
                    name={player.name}
                    country={player.country}
                    searches={player.searches}
                    />
                ))}
                </div>
            </div>
        )
    }
}

export default PlayerList;