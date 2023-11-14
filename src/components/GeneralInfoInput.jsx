import React from "react";
import Form from "./Form";

const GeneralInfoInput = () => {
	return (
		<div>
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
		</div>
	);
};

export default GeneralInfoInput;
