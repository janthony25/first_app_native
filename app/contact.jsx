import { StyleSheet, Text, View } from 'react-native'

import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Contact Us!</Text>
      <Link href="/" style={styles.link}>Back</Link>
    </View>
  )
}

export default Contact

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