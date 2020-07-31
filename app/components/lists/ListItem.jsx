import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

export default function ListItem({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				underlayColor={colors.lightBackground}
				onPress={onPress}
			>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image}></Image>}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{subTitle && (
							<AppText style={styles.subTitle} numberOfLines={2}>
								{subTitle}{" "}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						color={colors.medium}
						name="chevron-right"
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: "bold",
	},
});
