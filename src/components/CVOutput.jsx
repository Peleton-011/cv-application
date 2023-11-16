import React from "react";

const CVOutput = ({ generalInfo, educationInfo, experienceInfo }) => {
	const { name, address, phoneNumber, email } = generalInfo;
	return (
		<section>
			<h2>{name}</h2>
			<div>
				<span>{address}</span>
				<span>{phoneNumber}</span>
				<span>{email}</span>
			</div>
		</section>
	);
};

export default CVOutput;
