import React, { useEffect, useState } from "react";

import Input from "./Input";

const Form = ({ formName, inputs = [], submit, submitHandler }) => {
	return (
		<form onSubmit={submitHandler}>
			<h3>{formName}</h3>
			{inputs.map(({ inputName, inputID, label }) => {
				return (
					<Input
						key={inputID}
						inputName={inputName}
						inputID={inputID}
						label={label}
					/>
				);
			})}
			<button type="submit">{submit}</button>
		</form>
	);
};

export default Form;
