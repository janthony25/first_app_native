import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/img/logo_light.png";

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />

      <Spacer height={10} />
      <Text style={styles.title}>Welcome to Shelfie App!</Text>
      <Spacer />
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
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
