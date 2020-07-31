import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native";

export default function CategoryPickerItem({ item, onPress }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Icon
					backgroundColor={item.backgroundColor}
					name={item.icon}
					size={80}
				/>
			</TouchableOpacity>
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 50,
		alignItems: "center",
		width: "33%",
	},
	label: {
		marginTop: 5,
		textAlign: "center",
	},
});
