import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
			</View>
			<View style={styles.userContainer}>
				<ListItem
					image={require("../assets/mosh.jpg")}
					title="Mosh Hamedani"
					subTitle="5 Listing"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontSize: 20,
		fontWeight: "bold",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		paddingVertical: 10,
	},
	userContainer: {
		marginVertical: 20,
		marginHorizontal: 20,
	},
});
