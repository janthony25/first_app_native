import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        Welcome to Shelfie App!
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />
      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

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
