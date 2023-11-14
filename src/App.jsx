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
			<InfoInput
				Title="General Information"
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
						submitData={{
							submitText: "Submit Now!",
							submitHandler: (e) => {
								e.preventDefault();
								setEducationInfoList([
									...educationInfoList,
									{
										schoolName:
											currentEducationInfo.schoolName,
										degreeName:
											currentEducationInfo.degreeName,
										startDate:
											currentEducationInfo.startDate,
										id: uuid(),
									},
								]);
								setCurrentEducationInfo({
									schoolName: "",
									degreeName: "",
									startDate: "",
								});
							},
						}}
						inputList={inputLists.EducationInfo.map((input) => ({
							...input,
							value: currentEducationInfo[input.inputName],
						}))}
						onChange={(e) =>
							setCurrentEducationInfo({
								...currentEducationInfo,
								[e.target.name]: e.target.value,
							})
						}
					/>
				}
			</div>
			<div className="experience">
				<h3>Experience</h3>
				{experienceInfoList.map((experienceInfo) => (
					<SavedInfo
						key={experienceInfo.id}
						id={experienceInfo.id}
						name={experienceInfo.companyName}
						infoList={experienceInfoList}
						setInfo={setExperienceInfoList}
					/>
				))}
				{
					<InfoInput
						Title="Experience Information"
						submitData={{
							submitText: "Submit Now!",
							submitHandler: (e) => {
								e.preventDefault();
								setExperienceInfoList([
									...experienceInfoList,
									{
										companyName:
											currentExperienceInfo.companyName,
										positionName:
											currentExperienceInfo.positionName,
										startDate:
											currentExperienceInfo.startDate,
										endDate: currentExperienceInfo.endDate,
										description:
											currentExperienceInfo.description,
                                        id: uuid(),
									},
								]);
								setCurrentExperienceInfo({
									companyName: "",
									positionName: "",
									startDate: "",
									endDate: "",
									description: "",
								});
							},
						}}
						inputList={inputLists.ExperienceInfo.map((input) => ({
							...input,
							value: currentExperienceInfo[input.inputName],
						}))}
						onChange={(e) =>
							setCurrentExperienceInfo({
								...currentExperienceInfo,
								[e.target.name]: e.target.value,
							})
						}
					/>
				}
			</div>
		</>
	);
}

export default App;
