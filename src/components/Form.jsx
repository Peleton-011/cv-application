import Input from "./Input";

const Form = ({ formName, inputList = [], submitData = null, onChange }) => {
	return (
		<form
			onSubmit={
				submitData
					? submitData.submitHandler
					: (e) => e.preventDefault()
			}
		>
			<h3>{formName}</h3>
			{inputList.map(({ inputName, inputID, label, type, value }) => {
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
			{submitData && submitData.submitHandler && (
				<button type="submit">{submitData.submitText}</button>
			)}
			{submitData && submitData.cancelHandler && (
				<button onClick={submitData.cancelHandler}>{submitData.cancelText}</button>
			)}
		</form>
	);
};

export default Form;
