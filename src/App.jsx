import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import inputLists from "./inputLists";
import SpecialInfo from "./components/SpecialInfo";

function App() {

	const [generalInfo, setGeneralInfo] = useState({
		name: "",
		address: "",
		phoneNumber: "",
		email: "",
	});

	const [educationInfoList, setEducationInfoList] = useState([
		{ schoolName: "Testyy", id: 3 },
	]);
	const [currentEducationInfo, setCurrentEducationInfo] = useState({
		schoolName: "",
		degreeName: "",
		startDate: "",
	});

	const [experienceInfoList, setExperienceInfoList] = useState([]);

	const [currentExperienceInfo, setCurrentExperienceInfo] = useState({
		companyName: "",
		positionName: "",
		startDate: "",
		endDate: "",
		description: "",
	});

	return (
		<>
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
                name={"Education"}
            />
			<SpecialInfo 
            	infoList={experienceInfoList}
                setInfoList={setExperienceInfoList}
                currentInfo={currentExperienceInfo}
                setCurrentInfo={setCurrentExperienceInfo}
                inputList={inputLists.ExperienceInfo}
                name={"Experience"}
            />
		</>
	);
}

export default App;
