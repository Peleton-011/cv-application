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
			{educationInfo.length ? (
				<div>
					<h2>Education</h2>
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
			) : null}
			{experienceInfo.length ? (
				<div>
					<h2>Experience</h2>
					{experienceInfo.map((info) => {
						const {
							companyName,
							positionName,
							startDate,
							endDate,
							description,
							id,
						} = info;
						return (
							<div key={id}>
								<h3>
									{positionName} at {companyName}
								</h3>
								<span>
									{startDate} - {endDate || "current"}
								</span>
								<p>{description}</p>
							</div>
						);
					})}
				</div>
			) : null}
		</section>
	);
};

export default CVOutput;
