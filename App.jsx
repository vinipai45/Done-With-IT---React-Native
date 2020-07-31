import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Screen from "./app/components/Screen";

import colors from "./app/config/colors";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
	return (
		<Screen>
			<ListingEditScreen />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBackground,
	},
});
