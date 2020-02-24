import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className='player-card'>
            <h3>{props.name}</h3>
            <p>Country: {props.country}</p>
            <p>Searches: {props.searches}</p>
        </div>
    )
}

export default PlayerCard;