import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
	icon,
	items,
	numberOfColumns,
	onSelectItem,
	placeholder,
	PickerItemComponent = PickerItem,
	selectedItem,
	width = "100%",
}) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
					)}

					{selectedItem ? (
						<AppText style={styles.selectedItem}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons name="chevron-down" size={25} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<View style={{ alignItems: "flex-end" }}>
						<MaterialCommunityIcons
							style={styles.modalClose}
							size={30}
							name="close"
							onPress={() => setModalVisible(false)}
						/>
					</View>
					<FlatList
						numColumns={numberOfColumns}
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<>
								<PickerItemComponent
									item={item}
									label={item.label}
									onPress={() => {
										setModalVisible(false);
										onSelectItem(item);
									}}
								/>
							</>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightBackground,
		borderRadius: 30,
		flexDirection: "row",
		padding: 10,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	modalClose: {
		padding: 20,
	},
	placeholder: {
		color: colors.lightgrey,
		flex: 1,
	},
	selectedItem: {
		flex: 1,
	},
});
