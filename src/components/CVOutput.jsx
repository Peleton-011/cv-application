import React from "react";

const CVOutput = ({ generalInfo, educationInfo, experienceInfo }) => {
	const { name, address, phoneNumber, email } = generalInfo;
	return (
		<section>
			<div>
				<h2>{name}</h2>
				<div>
					<span>{address}</span>
					<span>{phoneNumber}</span>
					<span>{email}</span>
				</div>
			</div>
			<div>
				{educationInfo.map((info) => {
					const { schoolName, degreeName, startDate, id } = info;
					return (
						<div key={id}>
							<h3>
								{degreeName} - {schoolName}
							</h3>
							<span>{startDate}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default CVOutput;
