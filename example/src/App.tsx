import {StyleSheet, View} from "react-native";
import {TextField} from "@react-native-ui-components/text-field";

export default function App() {
	return (
		<View style={styles.container}>
			<TextField />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
