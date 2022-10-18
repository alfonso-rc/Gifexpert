import React, {useState} from "react";
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
	const [inputValue, setInputValue] = useState(" "); //si useState()se queda vacio es undefined. para ello pon comillas vacias para evitar el warning.

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault(); //Para prevenir el comportamiento por defecto del form
		if (inputValue.trim().length > 2) {
			setCategories((category) => [inputValue, ...category]);
			setInputValue("");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
