import React from 'react';

const ReactiveText = (props) => (
    <li className="nav-item brand">
        <a className="nav-item" handleImageClick={props.handleImageClick}>{props.message}</a>
    </li>
);

export default ReactiveText;