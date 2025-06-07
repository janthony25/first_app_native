import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}>

      <Image source={Logo} />

      <Text style={styles.title}>Welcome to Shelfie App!</Text>
      <Link href="/about" style={styles.link}>About</Link>
      <Link href="/contact" style={styles.link}>Contact</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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