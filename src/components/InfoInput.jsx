import React from "react";
import Form from "./Form";

const GeneralInfoInput = ({Title, inputList, submitText, submitHandler}) => {
	return (
		<div>
			<Form
				formName={Title}
				inputs={inputList}
				submit={submitText}
				submitHandler={submitHandler}
			/>
		</div>
	);
};

const inputList = [
	{
		inputName: "name",
		inputID: "name",
		label: "Full Name",
		type: "text",
	},
	{
		inputName: "email",
		inputID: "email",
		label: "Email",
		type: "email",
	},
	{
		inputName: "phoneNumber",
		inputID: "phoneNumber",
		label: "Phone Number",
		type: "phone",
	},
	{
		inputName: "address",
		inputID: "address",
		label: "Address",
		type: "text",
	},
];

export default GeneralInfoInput;
