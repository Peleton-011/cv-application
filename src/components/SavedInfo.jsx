import React from "react";

const SavedInfo = ({ name, id, infoList, setInfoList, onEdit }) => {
	return (
		<div>
			<h2>{name}</h2>
			<button
				onClick={() =>
					setInfoList(infoList.filter((info) => info.id !== id))
				}
			>
				Del
			</button>
			<button onClick={onEdit}>Edit</button>
		</div>
	);
};

export default SavedInfo;
