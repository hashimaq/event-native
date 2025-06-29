// RegisteredEventContext se data lene ke liye useContext use ho raha hai
import React, { useContext } from 'react';
// React Native components import kiye ja rahe hain UI banane ke liye
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// RegisteredEventContext ko yahan import kiya gaya hai
import { RegisteredEventContext } from '../../context/RegisteredEventContext';
// LinearGradient se gradient background banaya ja raha hai
import { LinearGradient } from 'expo-linear-gradient';

// MyBookingsScreen component banaya gaya hai jo bookings dikhata hai
export default function MyBookingsScreen() {
  // Context se registeredEvents array nikaala gaya hai
  const { registeredEvents } = useContext(RegisteredEventContext);

  // Component ka return UI
  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      {/* ScrollView taake sara content scroll ho sake */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Heading text */}
        <Text style={styles.heading}>🎟️ My Bookings</Text>

        {/* Agar koi event register nahi kiya to yeh message dikhega */}
        {registeredEvents.length === 0 ? (
          <Text style={styles.emptyText}>No events registered yet.</Text>
        ) : (
          // Agar events hain to un sab ko map karke card me show kiya jayega
          registeredEvents.map((event, index) => (
            <View key={index} style={styles.card}>
              {/* Event ki image dikhai ja rahi hai */}
              <Image source={event.image} style={styles.image} />
              {/* Event ka detail section */}
              <View style={styles.info}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.meta}>📅 {event.date}</Text>
                <Text style={styles.meta}>📍 {event.location}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </LinearGradient>
  );
}

// StyleSheet me sab components ke styles define kiye gaye hain
const styles = StyleSheet.create({
  container: {
    flex: 1, // Full height
    paddingTop: 60, // Top se space
  },
  scroll: {
    paddingHorizontal: 20, // Side se padding
    paddingBottom: 40, // Neeche se padding
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFA726', // Orange color
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#B0BEC5', // Light gray text
    marginTop: 100,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1a1a2e', // Dark background
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3, // Shadow for Android
  },
  image: {
    width: '100%',
    height: 180, // Fixed height image
  },
  info: {
    padding: 12, // Andar se padding
  },
  title: {
    fontSize: 18,
    color: '#FFA726',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  meta: {
    fontSize: 13,
    color: '#B0BEC5',
  },
});
