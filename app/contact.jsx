import { StyleSheet } from "react-native";

import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Contact Us!
      </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Back</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
