import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

export default function Card({ title, subTitle, image }) {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.cardDetails}>
				<AppText numberOfLines={1} style={styles.title}>
					{title}
				</AppText>
				<AppText numberOfLines={2} style={styles.subTitle}>
					{subTitle}
				</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		elevation: 10,
		backgroundColor: colors.white,
		borderRadius: 20,
		margin: 20,
		overflow: "hidden",
	},
	cardDetails: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: "bold",
	},
	title: {
		paddingVertical: 10,
	},
});
