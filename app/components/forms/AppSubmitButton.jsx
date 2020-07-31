import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function AppSubmitButton({ title, style }) {
	const { handleSubmit } = useFormikContext();
	return (
		<AppButton
			style={[styles.button, style]}
			title={title}
			onPress={handleSubmit}
		/>
	);
}

const styles = StyleSheet.create({
	button: {
		alignSelf: "auto",
		width: "100%",
	},
});
