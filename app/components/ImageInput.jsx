import React, { useEffect } from "react";
import {
	View,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

export default function ImageInput({ imageUri, onChangeImage }) {
	useEffect(() => {
		requestPhotoPermission();
	}, []);

	const requestPhotoPermission = async () => {
		try {
			const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();

			if (!granted) alert("You've to give permission tp access photos");
		} catch (err) {
			console.log("Error", err);
		}
	};

	const handlePress = () => {
		if (!imageUri) {
			selectImage();
		} else {
			Alert.alert("Delete", "Are you sure you want to delete", [
				{ text: "Yes", onPress: () => onChangeImage(null) },
				{ text: "No" },
			]);
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) {
				onChangeImage(result.uri);
			}
		} catch (err) {
			console.log("Error", err);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.chooseImageButton}>
				{!imageUri && <MaterialCommunityIcons name="camera" size={40} />}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
}
const styles = StyleSheet.create({
	chooseImageButton: {
		width: 100,
		height: 100,
		backgroundColor: colors.lightBackground,
		borderRadius: 20,
		margin: 10,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	mainContainer: {
		flexDirection: "row",
	},
});
