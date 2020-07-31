import React from "react";
import { View, Text, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
	{
		id: 1,
		title: "Red Jacket",
		price: 100,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch in great condition",
		price: 200,
		image: require("../assets/couch.jpg"),
	},
];

export default function ListingScreens() {
	return (
		<Screen>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={"$" + item.price}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	);
}
