// app/profile.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        console.log('Retrieved Email:', storedEmail);
        if (storedEmail) setEmail(storedEmail);
      } catch (error) {
        console.error('Failed to load email:', error);
      } finally {
        setLoading(false);
      }
    };
    getEmail();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userEmail');
    Alert.alert('Logged Out', 'You have been successfully logged out.');
    router.replace('/login');
  };

  if (loading) {
    return (
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
        <ActivityIndicator size="large" color=" " />
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Logged in as:</Text>
        <Text style={styles.email}>{email || 'User not found'}</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#1a1a2e',
    padding: 25,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: '#B0BEC5',
    marginBottom: 8,
  },
  email: {
    fontSize: 20,
    color: '#FFA726',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFA726',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#2C5364',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
