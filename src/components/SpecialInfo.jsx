import React from "react";
import Form from "./Form";
import SavedInfo from "./SavedInfo";
import { v4 as uuid } from "uuid";

const SpecialInfo = ({
	infoList,
	setInfoList,
	currentInfo,
	setCurrentInfo,
	inputList,
	name,
}) => {
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
					name={info.schoolName || info.positionName}
				/>
			))}
			{
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
						},
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
			}
		</div>
	);
};

export default SpecialInfo;
