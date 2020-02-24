import React from 'react';

const PlayerCard = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Country: {props.country}</p>
            <p>View rank: {props.searches}</p>
        </div>
    )
}

export default PlayerCard;