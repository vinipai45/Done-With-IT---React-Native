import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
	name,
	size = 40,
	backgroundColor = "#000",
	iconColor = "#fff",
}) {
	return (
		<View
			style={{
				backgroundColor,
				width: size,
				height: size,
				borderRadius: size / 2,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
		</View>
	);
}
