// app/my-bookings.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { RegisteredEventContext } from '../../context/RegisteredEventContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function MyBookingsScreen() {
  const { registeredEvents } = useContext(RegisteredEventContext);

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.heading}>🎟️ My Bookings</Text>

        {registeredEvents.length === 0 ? (
          <Text style={styles.emptyText}>No events registered yet.</Text>
        ) : (
          registeredEvents.map((event, index) => (
            <View key={index} style={styles.card}>
              <Image source={event.image} style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: 60,
  },
  scroll: {
    paddingHorizontal: 20, paddingBottom: 40,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFA726',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#B0BEC5',
    marginTop: 100,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
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
