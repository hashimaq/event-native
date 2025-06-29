// React aur hooks import kar rahe hain (useState for input handling)
import React, { useState } from 'react';

// React Native ke basic components import ho rahe hain
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';

// Background gradient ke liye Expo ka LinearGradient import kiya
import { LinearGradient } from 'expo-linear-gradient';

// Routing ke liye useRouter hook use ho raha hai (Expo Router)
import { useRouter } from 'expo-router';

// Local storage ke liye AsyncStorage import kiya gaya
import AsyncStorage from '@react-native-async-storage/async-storage';

// Functional component start ho raha hai
export default function LoginScreen() {

  // Router ko initialize kiya (navigate karne ke liye)
  const router = useRouter();

  // Email aur password ko state me store karne ke liye useState hook use kiya
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login button click hone par ye function chalega
  const handleLogin = async () => {
    // Agar email ya password khaali hai to alert dikhana
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password');
      return;
    }

    try {
      // Email ko AsyncStorage me save kar rahe hain
      await AsyncStorage.setItem('userEmail', email);

      // Login ke baad user ko home screen pe redirect kar diya
      router.replace('/(tabs)/home');
    } catch (error) {
      // Agar koi error aata hai to alert show karte hain
      Alert.alert('Login Error', 'Something went wrong');
    }
  };

  return (
    // Gradient background set kiya gaya hai
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style={styles.container}
    >
      {/* iOS devices ke liye keyboard ko avoid karne ke liye wrapper */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}
      >
        {/* Logo image display kar rahe hain */}
        <Image
          source={require('../assets/images/eventlogo.jpg')}
          style={styles.logo}
        />

        {/* Title likha gaya hai */}
        <Text style={styles.title}>Login to EventEase</Text>

        {/* Email ka input field */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0BEC5"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password ka input field */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0BEC5"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Login button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Footer text (register ka suggestion) */}
        <Text style={styles.footerText}>Don’t have an account? Just login to continue →</Text>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

// Styling yahan define ki gayi hai
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  innerContainer: {
    width: '85%', alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 25,
    borderRadius: 60, // gola banane ke liye
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // halka background
    padding: 10,
    shadowColor: '#FFA726', // orange shadow
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA726',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#455A64',
  },
  button: {
    backgroundColor: '#FFA726',
    paddingVertical: 14,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#2C5364',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    marginTop: 30,
    color: '#B0BEC5',
    fontSize: 13,
    textAlign: 'center',
  },
});
