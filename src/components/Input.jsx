import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Input = ({ inputName, inputID, label = inputName, type, placeholder }) => {
	return (
		<div className="inputWrapper">
			<label htmlFor={inputID}>{label}</label>
			{type === "phone" ? (
				(() => {
					// `value` will be the parsed phone number in E.164 format.
					// Example: "+12133734253".
					const [value, setValue] = useState();
					return (
						<PhoneInput
							placeholder="Enter phone number"
							value={value}
							onChange={setValue}
						/>
					);
				})()
			) : (
				<input type="text" id={inputID} name={inputName} placeholder={placeholder} />
			)}
		</div>
	);
};

export default Input;
