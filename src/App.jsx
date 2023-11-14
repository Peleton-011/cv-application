import "./App.css";
import InfoInput from "./components/InfoInput";
import inputLists from "./inputLists";

function App() {
	const submitHandler = (e) => {
		e.preventDefault();
		console.log("Submitted!");
	};
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
