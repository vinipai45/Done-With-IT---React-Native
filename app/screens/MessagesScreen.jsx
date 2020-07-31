import React, { useState } from "react";
import { View, FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/mosh.jpg"),
	},
];

export default function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		const newMessages = messages.filter((m) => m.id != message.id);
		setMessages(newMessages);
	};

	return (
		<>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => {
							console.log("Message selected", item);
						}}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeperator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages(initialMessages);
				}}
			/>
		</>
	);
}
