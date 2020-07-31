import { Platform } from "react-native";
import colors from "./colors";

export default {
	colors,
	textInput: {
		width: "100%",
		fontSize: 18,
		fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
		color: colors.darkgrey,
	},
	text: {
		fontSize: 15,
		fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
		color: colors.darkgrey,
	},
};
