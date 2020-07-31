import React from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
			)}
			<TextInput
				placeholderTextColor={colors.lightgrey}
				style={defaultStyles.textInput}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: colors.lightBackground,
		borderRadius: 30,
		flexDirection: "row",
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	textInput: {
		width: "100%",
		fontSize: 18,
		fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
		color: colors.darkgrey,
	},
});
