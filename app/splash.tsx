// app/splash.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        source={require('../assets/images/eventlogo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.brand}>EventEase</Text>

      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20,
  },
 logo: {
  width: 200,
  height: 120,
  marginBottom: 25,
  borderRadius: 60, // makes edges soft
  backgroundColor: 'rgba(255, 255, 255, 0.05)', // subtle back layer
  padding: 10,
  shadowColor: '#FFA726',
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  alignSelf: 'center',
},
  title: {
    fontSize: 20, color: '#FFA726', fontWeight: '400',
  },
  brand: {
    fontSize: 36, fontWeight: 'bold', color: '#FFA726', marginTop: 4, marginBottom: 40,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FF7043',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
