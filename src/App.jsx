import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import inputLists from "./inputLists";
import SpecialInfo from "./components/SpecialInfo";
import CVOutput from "./components/CVOutput";

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: "",
		address: "",
		phoneNumber: "",
		email: "",
	});

	const [educationInfoList, setEducationInfoList] = useState([]);
	const emptyEducation = {
		schoolName: "",
		degreeName: "",
		startDate: "",
	};
	const [currentEducationInfo, setCurrentEducationInfo] = useState({
		...emptyEducation,
	});

	const [experienceInfoList, setExperienceInfoList] = useState([]);
	const emptyExperience = {
		companyName: "",
		positionName: "",
		startDate: "",
		endDate: "",
		description: "",
	};
	const [currentExperienceInfo, setCurrentExperienceInfo] = useState({
		...emptyExperience,
	});

	return (
		<>
			<section>
				<h1>Henlo</h1>
				<Form
					formName="General Information"
					inputList={inputLists.GeneralInfo.map((input) => ({
						...input,
						value: generalInfo[input.inputName],
					}))}
					onChange={(e) =>
						setGeneralInfo({
							...generalInfo,
							[e.target.name]: e.target.value,
						})
					}
				/>
				<SpecialInfo
					infoList={educationInfoList}
					setInfoList={setEducationInfoList}
					currentInfo={currentEducationInfo}
					setCurrentInfo={setCurrentEducationInfo}
					inputList={inputLists.EducationInfo}
					emptyInfo={emptyEducation}
					name={"Education"}
				/>
				<SpecialInfo
					infoList={experienceInfoList}
					setInfoList={setExperienceInfoList}
					currentInfo={currentExperienceInfo}
					setCurrentInfo={setCurrentExperienceInfo}
					inputList={inputLists.ExperienceInfo}
					emptyInfo={emptyExperience}
					name={"Experience"}
				/>
			</section>
			<CVOutput
				generalInfo={generalInfo}
				educationInfo={educationInfoList}
				experienceInfo={experienceInfoList}
			/>
		</>
	);
}

export default App;
