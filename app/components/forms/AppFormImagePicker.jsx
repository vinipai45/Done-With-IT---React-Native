import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function AppFormImagePicker({ name }) {
	const { setFieldValue, errors, values, touched } = useFormikContext();

	const handleAddImage = (uri) => {
		setFieldValue(name, [...values[name], uri]);
	};

	const handleRemoveImage = (uri) => {
		setFieldValue(
			name,
			values[name].filter((imageUri) => imageUri !== uri)
		);
	};

	return (
		<>
			<ImageInputList
				imageUris={values[name]}
				onAddImage={handleAddImage}
				onRemoveImage={handleRemoveImage}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
