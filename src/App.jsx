import "./App.css";
import Form from "./components/Form";

function App() {
	return (
		<>
			<h1>Henlo</h1>
			<Form
				formName="General Information"
				inputs={[
					{
						inputName: "name",
						inputID: "name",
						label: "Name",
					},
					{
						inputName: "address",
						inputID: "address",
						label: "Address",
					},
					{
						inputName: "phoneNumber",
						inputID: "phoneNumber",
						label: "Phone Number",
					},
					{
						inputName: "email",
						inputID: "email",
						label: "Email",
					},
				]}
				submit="Submit Now!"
				submitHandler={(e) => {
					e.preventDefault();
					console.log("Submitted!");
				}}
			/>
		</>
	);
}

export default App;
