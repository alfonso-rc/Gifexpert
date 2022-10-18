import React from "react";

export const GifGridItem = ({id, title, imagen}) => {
	console.log(id, title, imagen);

	return (
		<div className="card animate__animated animate__bounce ">
			<img src={imagen} alt={title} />
			<p>{title}</p>
		</div>
	);
};
