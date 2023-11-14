import React, { useState, useEffect } from "react";

const Input = ({ inputName, inputID, label = inputName }) => {
	return (
		<div className="inputWrapper">
			<label htmlFor={inputID}>{label}</label>
			<input type="text" id={inputID} name={inputName} />
		</div>
	);
};

export default Input;
