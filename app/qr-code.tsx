// app/qr-code.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RegisteredEventContext } from '../context/RegisteredEventContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function QRCodeScreen() {
  const { registeredEvents } = useContext(RegisteredEventContext);
  const router = useRouter();
  const latestEvent = registeredEvents[registeredEvents.length - 1];

  if (!latestEvent) {
    return (
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
        <Text style={styles.noEvent}>No registration found. Please register for an event first.</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <Text style={styles.heading}>🎫 Your QR Code</Text>
      <Text style={styles.eventName}>{latestEvent.title}</Text>
      <Text style={styles.subText}>Show this QR at the event gate</Text>

      <Image
        source={require('../assets/images/qr.png')}
        style={styles.qr}
        resizeMode="contain"
      />

      <View style={styles.details}>
        <Text style={styles.meta}>📅 {latestEvent.date}</Text>
        <Text style={styles.meta}>📍 {latestEvent.location}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/my-bookings')}>
        <Text style={styles.buttonText}>Go to My Bookings</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: '#FFA726',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventName: {
    fontSize: 18,
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#B0BEC5',
    marginBottom: 30,
  },
  qr: {
    width: 250,
    height: 250,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  details: {
    alignItems: 'center',
  },
  meta: {
    fontSize: 15,
    color: '#B0BEC5',
    marginBottom: 5,
  },
  noEvent: {
    marginTop: 150,
    color: '#FFA726',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FFA726',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: '#2C5364',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
