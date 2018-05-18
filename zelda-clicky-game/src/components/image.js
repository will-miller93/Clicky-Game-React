import React from 'react';
import './image.css';

const Image = (props) => {
    var img = require(`../images/${props.id}.jpg`);

    return (
		<div className={"col-3"}>
			<img className={"image-thumbnail shadow-lg"} src={img} alt="resized" onClick={() => props.handleImageClick(props.id, props.selected)}></img>
		</div>
	);
};

export default Image;