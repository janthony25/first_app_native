import { StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constans/Colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText style={styles.title} title={true}>
        About Page
      </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Back</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    borderBottomWidth: 1,
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "bold",
  },
});
