import React from 'react';

const ScoreBoard = (props) => (
    <li className="nav-item brand">
        <a className="nav-item" handleImageClick={props.handleImageClick}> Score:{props.score} | Top Score:{props.topScore} </a>
    </li>
);

export default ScoreBoard;