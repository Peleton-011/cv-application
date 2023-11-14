import React from "react";
import Form from "./Form";

const GeneralInfoInput = () => {
	return (
		<div>
			<Form
				formName="General Information"
				inputs={inputList}
				submit="Submit Now!"
				submitHandler={(e) => {
					e.preventDefault();
					console.log("Submitted!");
				}}
			/>
		</div>
	);
};

const inputList = [
	{
		inputName: "name",
		inputID: "name",
		label: "Name",
		type: "text",
	},
	{
		inputName: "address",
		inputID: "address",
		label: "Address",
		type: "text",
	},
	{
		inputName: "phoneNumber",
		inputID: "phoneNumber",
		label: "Phone Number",
		type: "phone",
	},
	{
		inputName: "email",
		inputID: "email",
		label: "Email",
		type: "email",
	},
];

export default GeneralInfoInput;
