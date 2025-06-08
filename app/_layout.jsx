import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link, Slot } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/Colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={{ flex: 1 }}>
      <Slot />

      {/* <View style={[styles.footer, { backgroundColor: theme.background }]}>
        <Link href="/">
          {" "}
          <Ionicons name="home" size={30} color="#00BFFF" />
        </Link>
      </View> */}
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  footer: {
    padding: 20,
  },
});
