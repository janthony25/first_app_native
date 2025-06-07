import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constans/Colors';

const About = () => {
     const colorScheme = useColorScheme();
     const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>Back</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    link: {
        borderBottomWidth: 1,
        fontSize: 16,
        marginVertical: 10,
        fontWeight: 'bold'
    }
})