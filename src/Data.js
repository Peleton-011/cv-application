export default class CVData {
	constructor() {
		this.generalInfo = {
			name: "",
			address: "",
			phoneNumber: "",
			email: "",
		};
		this.educationList = [];
		this.experienceList = [];
	}

	setGeneralInfo({ name, address, phoneNumber, email }) {
		this.generalInfo = {
			name,
			address,
			phoneNumber,
			email,
		};
	}

	addEducation({ schoolName, degreeName, startDate }) {
		this.educationList.push(
			new Education(schoolName, degreeName, startDate)
		);
	}
	addExperience({
		companyName,
		positionName,
		startDate,
		endDate,
		description,
	}) {
		this.experienceList.push(
			new Experience(
				companyName,
				positionName,
				startDate,
				endDate,
				description
			)
		);
	}
}

class Education {
	constructor(schoolName, degreeName, startDate) {
		this.schoolName = schoolName;
		this.degreeName = degreeName;
		this.startDate = startDate;
	}
}

class Experience {
	constructor(companyName, positionName, startDate, endDate, description) {
		this.companyName = companyName;
		this.positionName = positionName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.description = description;
	}
}
