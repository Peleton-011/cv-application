import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Input = ({
	inputName,
	inputID,
	label = inputName,
	type,
	placeholder,
	value,
	onChange,
}) => {
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
							onBlur={onChange}
                            name={inputName}
						/>
					);
				})()
			) : (
				<input
					type="text"
					id={inputID}
					name={inputName}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>
			)}
		</div>
	);
};

export default Input;
