import React from 'react';

import PlayerCard from './PlayerCard';

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
                {this.state.players.map(player => (
                    <PlayerCard 
                    key={player.id}
                    name={player.name}
                    country={player.country}
                    searches={player.searches}
                    />
                ))}
            </div>
        )
    }
}

export default PlayerList;