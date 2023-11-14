import "./App.css";
import { useState } from "react";
import InfoInput from "./components/InfoInput";
import inputLists from "./inputLists";
import {v4 as uuid} from "uuid";

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

	const [educationInfoList, setEducationInfoList] = useState([]);

	const [experienceInfoList, setExperienceInfoList] = useState([]);

	return (
		<>
			<h1>Henlo</h1>
			<InfoInput
				Title="General Information"
				inputList={inputLists.GeneralInfo}
				submitText="Submit Now!"
				submitHandler={submitHandler}
			/>
			<div className="education">
				<h3>Education</h3>
                {educationInfoList.map((educationInfo) => (
                    
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
