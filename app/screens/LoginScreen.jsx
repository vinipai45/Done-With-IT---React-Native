import React from "react";
import { StyleSheet, Image, ToastAndroid } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validateSchema = Yup.object().shape({
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().min(4).required().label("Password"),
});

export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validateSchema}
			>
				<AppFormField
					autoCapitalize="none"
					autoComplete={false}
					autoCompleteType="off"
					icon="email"
					name="email"
					placeholder="Email"
				/>
				<AppFormField
					autoCapitalize="none"
					autoComplete={false}
					autoCompleteType="off"
					secureTextEntry
					icon="lock"
					name="password"
					placeholder="Password"
				/>
				<AppSubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		margin: 20,
	},
	logo: {
		padding: 20,
		width: 70,
		height: 70,
	},
});
