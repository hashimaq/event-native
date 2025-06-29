// React aur zaroori components import kiye
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // background gradient ke liye
import { useRouter } from 'expo-router'; // navigation ke liye router

// SplashScreen function component
export default function SplashScreen() {
  const router = useRouter(); // router instance banaya

  // jab user button press kare to login screen pe le jaye
  const goToLogin = () => {
    router.replace('/login');
  };

  // return karta hai splash screen ka UI
  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']} // gradient colors diye gaye hain
      start={{ x: 0, y: 0 }} // gradient ka start point
      end={{ x: 1, y: 1 }} // gradient ka end point
      style={styles.container} // container ka style
    >
      <Image
        source={require('../assets/images/eventlogo.jpg')} // logo image lagayi
        style={styles.logo} // logo ka style
      />
      <Text style={styles.title}>Welcome to</Text> {/* chhota welcome text */}
      <Text style={styles.brand}>EventEase</Text> {/* brand name dikhaya */}

      {/* button jis par click karne se login screen par chala jaye */}
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Get Started</Text> {/* button ka text */}
      </TouchableOpacity>
    </LinearGradient>
  );
}

// yahan styling define ki gayi hai
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // vertically center
    alignItems: 'center', // horizontally center
    paddingHorizontal: 20, // left/right padding
  },
  logo: {
    width: 200, // image ki width
    height: 120, // image ki height
    marginBottom: 25, // neeche space
    borderRadius: 60, // gol kinare
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // halka sa back layer
    padding: 10, // andar se spacing
    shadowColor: '#FFA726', // shadow ka color
    shadowOffset: { width: 0, height: 8 }, // shadow ka direction
    shadowOpacity: 0.3, // shadow ka dardja
    shadowRadius: 10, // shadow ka phelaav
    alignSelf: 'center', // khud ko center me rakha
  },
  title: {
    fontSize: 20, // font size
    color: '#FFA726', // orange color
    fontWeight: '400', // medium weight
  },
  brand: {
    fontSize: 36, // bada text
    fontWeight: 'bold', // bold likha
    color: '#FFA726', // orange color
    marginTop: 4, // upar space
    marginBottom: 40, // neeche space
  },
  button: {
    backgroundColor: '#FFFFFF', // button ka background white
    paddingVertical: 14, // top/bottom padding
    paddingHorizontal: 30, // left/right padding
    borderRadius: 30, // gol button
  },
  buttonText: {
    color: '#FF7043', // button ke text ka color
    fontSize: 16, // font size
    fontWeight: 'bold', // bold likha
  },
});
