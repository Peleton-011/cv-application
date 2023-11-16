import React from "react";
import Form from "./Form";
import SavedInfo from "./SavedInfo";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const SpecialInfo = ({
	infoList,
	setInfoList,
	currentInfo,
	setCurrentInfo,
	inputList,
	name,
}) => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const getOnDelete = (id) => {
		return (e) => {
			setInfoList(infoList.filter((info) => info.id !== id));
		};
	};

	const getOnEdit = (id) => {
		return (e) => {
			console.log("editin " + id);
		};
	};

	return (
		<div>
			<h3>{name}</h3>
			{infoList.map((info) => (
				<SavedInfo
					key={info.id}
					onDelete={getOnDelete(info.id)}
					onEdit={getOnEdit(info.id)}
					name={info.degreeName || info.positionName}
				/>
			))}
			{isFormOpen ? (
				<Form
					formName={name + " Information"}
					submitData={{
						submitText: "Submit Now!",
						submitHandler: (e) => {
							e.preventDefault();
							setInfoList([
								...infoList,
								{
									...currentInfo,
									id: uuid(),
								},
							]);
							setCurrentInfo({});
							setIsFormOpen(false);
						},
						cancelHandler: (e) => {
							e.preventDefault();
							setCurrentInfo({});
							setIsFormOpen(false);
						},
						cancelText: "Cancel",
					}}
					inputList={inputList.map((input) => ({
						...input,
						value: currentInfo[input.inputName],
					}))}
					onChange={(e) =>
						setCurrentInfo({
							...currentInfo,
							[e.target.name]: e.target.value,
						})
					}
				/>
			) : (
				<button onClick={(e) => setIsFormOpen(true)}>Add {name}</button>
			)}
		</div>
	);
};

export default SpecialInfo;
