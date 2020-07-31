import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../../config/colors";

export default function ListItemDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can"
					color={colors.white}
					size={35}
				></MaterialCommunityIcons>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 100,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});
