import Input from "./Input";

const Form = ({ formName, inputs = [], submitData = null, onChange }) => {
	return (
		<form
			onSubmit={
				submitData
					? submitData.submitHandler
					: (e) => e.preventDefault()
			}
		>
			<h3>{formName}</h3>
			{inputs.map(({ inputName, inputID, label, type, value }) => {
				return (
					<Input
						key={inputID}
						inputName={inputName}
						inputID={inputID}
						label={label}
						type={type}
                        value={value}
                        onChange={onChange}
					/>
				);
			})}
			{submitData && <button type="submit">{submitData.submitText}</button>}
		</form>
	);
};

export default Form;
