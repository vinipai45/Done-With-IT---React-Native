import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons
					name="close"
					color={colors.white}
					size={35}
				></MaterialCommunityIcons>
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					color={colors.white}
					size={35}
				></MaterialCommunityIcons>
			</View>
			<Image
				resizeMode="contain"
				style={styles.imageStyle}
				source={require("../assets/chair.jpg")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 30,
	},
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},
	deleteIcon: {
		position: "absolute",
		top: 40,
		right: 30,
	},
	imageStyle: {
		width: "100%",
		height: "100%",
	},
});
