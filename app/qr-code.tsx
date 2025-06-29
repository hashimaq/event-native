// React aur zaroori hooks import kiye
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RegisteredEventContext } from '../context/RegisteredEventContext'; // context jahan registered events hain
import { LinearGradient } from 'expo-linear-gradient'; // background ke liye gradient
import { useRouter } from 'expo-router'; // navigation ke liye router
import QRCode from 'react-native-qrcode-svg'; // QR code component import kiya

export default function QRCodeScreen() {
  const { registeredEvents } = useContext(RegisteredEventContext); // registered events ko context se liya
  const router = useRouter(); // router use kiya navigation ke liye

  // sab se last registered event ko uthaya
  const latestEvent = registeredEvents[registeredEvents.length - 1];

  // agar koi event registered nahi hai to yeh message show hoga
  if (!latestEvent) {
    return (
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
        <Text style={styles.noEvent}>No registration found. Please register for an event first.</Text>
      </LinearGradient>
    );
  }

  // QR code ka value ek string banayi jo event ki details contain karti hai
  const qrValue = JSON.stringify({
    event: latestEvent.title,
    date: latestEvent.date,
    location: latestEvent.location,
    id: latestEvent.id,
  });

  // agar event mila to ye screen show hogi
  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <Text style={styles.heading}>🎫 Your QR Code</Text> {/* heading */}
      <Text style={styles.eventName}>{latestEvent.title}</Text> {/* event ka naam */}
      <Text style={styles.subText}>Show this QR at the event gate</Text> {/* instruction */}

      {/* QRCode component jo dynamic value show karta hai */}
      <QRCode
        value={qrValue} // value ke andar event ki detail
        size={250} // size of QR
        backgroundColor="#FFFFFF" // background white rakha
      />

      {/* event ki date aur location */}
      <View style={styles.details}>
        <Text style={styles.meta}>📅 {latestEvent.date}</Text>
        <Text style={styles.meta}>📍 {latestEvent.location}</Text>
      </View>

      {/* button jise click karne par my bookings pe le jata hai */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/my-bookings')}>
        <Text style={styles.buttonText}>Go to My Bookings</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

// styling ke tamam styles yahan define kiye gaye hain
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
  details: {
    alignItems: 'center',
    marginTop: 20,
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
