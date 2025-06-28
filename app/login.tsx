// app/login.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please fill in both email and password');
    return;
  }

  try {
    // ✅ Store email locally
    await AsyncStorage.setItem('userEmail', email);

    // ✅ Navigate to home layout
    router.replace('/(tabs)/home');
  } catch (error) {
    Alert.alert('Login Error', 'Something went wrong');
  }
};

  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}
      >
        <Image
          source={require('../assets/images/eventlogo.jpg')}
          style={styles.logo}
        />
        <Text style={styles.title}>Login to EventEase</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0BEC5"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0BEC5"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Don’t have an account? Just login to continue →</Text>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

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
