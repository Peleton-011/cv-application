import React from "react";

const SavedInfo = ({ name, onDelete, onEdit }) => {
	return (
		<div>
			<h2>{name}</h2>
			<button
				onClick={onDelete}
			>
				Del
			</button>
			<button onClick={onEdit}>Edit</button>
		</div>
	);
};

export default SavedInfo;
