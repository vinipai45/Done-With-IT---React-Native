import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
	return (
		<ImageBackground
			blurRadius={5}
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Text style={styles.tagline}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title="Login" color="primary"></AppButton>
				<AppButton title="Register" color="secondary"></AppButton>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonContainer: {
		padding: 20,
		width: "100%",
	},
	loginButton: {
		width: "100%",
		height: 70,
		backgroundColor: colors.primary,
	},
	logo: {
		width: 100,
		height: 100,
		alignSelf: "center",
	},
	logoContainer: {
		position: "absolute",
		top: 60,
	},
	registerButton: {
		width: "100%",
		height: 70,
		backgroundColor: colors.secondary,
	},
	tagline: {
		fontSize: 20,
		fontWeight: "bold",
		paddingVertical: 20,
	},
});
