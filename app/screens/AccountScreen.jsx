import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ListItemSeperator from "../components/lists/ListItemSeperator";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

export default function AccountScreen() {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Mosh Hamedani"
					subTitle="programming with mosh"
					image={require("../assets/mosh.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeperator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				></FlatList>
			</View>
			<View style={styles.container}>
				<ListItem
					title="Logout"
					IconComponent={<Icon name="logout" backgroundColor="#ffd740" />}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	screen: {
		backgroundColor: colors.lightBackground,
	},
});
