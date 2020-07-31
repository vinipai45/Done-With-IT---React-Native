import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

export default function AppButton({
	color = "primary",
	style,
	title,
	onPress,
}) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.button, { backgroundColor: colors[color] }, style]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		borderRadius: 30,
		elevation: 10,
		justifyContent: "center",
		padding: 15,
		width: "100%",
		marginVertical: 10,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
});
