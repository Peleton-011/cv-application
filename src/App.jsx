import "./App.css";
import { useState } from "react";
import InfoInput from "./components/InfoInput";
import inputLists from "./inputLists";
import { v4 as uuid } from "uuid";
import SavedInfo from "./components/SavedInfo";

function App() {
	const submitHandler = (e) => {
		e.preventDefault();
		console.log("Submitted!");
	};

	const [generalInfo, setGeneralInfo] = useState({
		name: "",
		address: "",
		phoneNumber: "",
		email: "",
	});

	const [educationInfoList, setEducationInfoList] = useState([
		{ schoolName: "Testyy", id: 3 },
	]);

	const [experienceInfoList, setExperienceInfoList] = useState([]);

	return (
		<>
			<h1>Henlo</h1>
			<InfoInput
				Title="General Information"
				inputList={inputLists.GeneralInfo.map((input) => ({
					...input,
					value: generalInfo[input.inputName],
				}))}
				onChange={(e) => setGeneralInfo({
					...generalInfo,
					[e.target.name]: e.target.value,
				})}
			/>
			<div className="education">
				<h3>Education</h3>
				{educationInfoList.map((educationInfo) => (
					<SavedInfo
						key={educationInfo.id}
						id={educationInfo.id}
						name={educationInfo.schoolName}
						infoList={educationInfoList}
						setInfo={setEducationInfoList}
					/>
				))}
				{
					<InfoInput
						Title="Education Information"
						inputList={inputLists.EducationInfo}
						submitText="Submit Now!"
						submitHandler={submitHandler}
					/>
				}
			</div>
			<div className="experience">
				<h3>Experience</h3>
				{
					<InfoInput
						Title="Experience Information"
						inputList={inputLists.ExperienceInfo}
						submitText="Submit Now!"
						submitHandler={submitHandler}
					/>
				}
			</div>
		</>
	);
}

export default App;
