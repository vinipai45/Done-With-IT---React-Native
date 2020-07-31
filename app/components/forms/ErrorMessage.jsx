import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ErrorMessage({ error, visible }) {
	if (!error || !visible) return null;
	return <Text style={styles.text}>{error}</Text>;
}

const styles = StyleSheet.create({
	text: {
		color: "red",
	},
});
