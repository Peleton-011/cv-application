import React from "react";
import Form from "./Form";

const InfoInput = ({ Title, inputList, onChange, submitData }) => {
	return (
		<div>
			<Form
				formName={Title}
				inputs={inputList}
				submitData={submitData}
				onChange={onChange}
			/>
		</div>
	);
};

export default InfoInput;
