import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
	imageUris = [],
	onAddImage,
	onRemoveImage,
}) {
	const scrollView = useRef();

	return (
		<View>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				ref={scrollView}
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((imageUri) => (
						<ImageInput
							imageUri={imageUri}
							key={imageUri}
							onChangeImage={() => onRemoveImage(imageUri)}
						/>
					))}
					<ImageInput onChangeImage={(imageUri) => onAddImage(imageUri)} />
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
});
