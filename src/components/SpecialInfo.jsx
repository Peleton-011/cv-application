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
	emptyInfo,
}) => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const getOnDelete = (id) => {
		return (e) => {
			setInfoList(infoList.filter((info) => info.id !== id));
		};
	};

	const getOnEdit = (id) => {
		return (e) => {
			setCurrentInfo(infoList.find((info) => info.id === id));
			setIsFormOpen(true);
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
						submitText: currentInfo.id
							? "Save Changes"
							: "Submit Now",
						submitHandler: currentInfo.id
							? (e) => {
									e.preventDefault();
									setInfoList([
										...infoList.map((info) =>
											info.id === currentInfo.id
												? { ...currentInfo, id: uuid() }
												: info
										),
									]);
									setCurrentInfo({ ...emptyInfo });
									setIsFormOpen(false);
							  }
							: (e) => {
									e.preventDefault();
									setInfoList([
										...infoList,
										{
											...currentInfo,
											id: uuid(),
										},
									]);
									setCurrentInfo({ ...emptyInfo });
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
