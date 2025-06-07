import { StyleSheet, Text, View } from 'react-native'
import { Link, Slot } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

const RootLayout = () => {
  return (
    <View style={{flex: 1}}>
      <Slot />

      <View style={styles.footer}>
        <Link href="/"> <Ionicons name="home" size={30} color="#00BFFF" /></Link>
      </View>
      
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    footer: {
        padding: 20
    }
})