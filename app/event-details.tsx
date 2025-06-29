
// React aur context use karne ke liye import
import React, { useContext } from 'react';
// RN ke built-in components import
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
// URL se params lene ke liye aur navigation ke liye
import { useLocalSearchParams, useRouter } from 'expo-router';
// Background gradient ke liye
import { LinearGradient } from 'expo-linear-gradient';
// RegisteredEventContext se context import kar rahe hain
import { RegisteredEventContext } from '../context/RegisteredEventContext';

// Static events list jisme 15 dummy events hain — yeh home screen aur details dono me use ho rahe hain
const allEvents = [ /* 
  //1 se 15 tak array me events defined hain */
  {
    id: 1,
    title: 'Do something nice for someone you care about',
    date: '2025-07-01',
    location: 'Lahore Expo Center',
    description: 'Spread kindness by doing something thoughtful for someone you care about.',
    image: require('../assets/images/event1.jpg'),
  },
  {
    id: 2,
    title: 'Memorize a Poem',
    date: '2025-07-02',
    location: 'UCP Auditorium',
    description: 'Challenge yourself to memorize and recite a classic or personal favorite poem.',
    image: require('../assets/images/event2.jpg'),
  },
  {
    id: 3,
    title: 'Watch a Classic Movie',
    date: '2025-07-03',
    location: 'CineStar Gulberg',
    description: 'Experience the timeless charm of a cinematic masterpiece in a classic screening.',
    image: require('../assets/images/event3.jpg'),
  },
  {
    id: 4,
    title: 'Watch a Documentary',
    date: '2025-07-04',
    location: 'Knowledge Hall, UCP',
    description: 'Explore real-world topics through a powerful and informative documentary.',
    image: require('../assets/images/event4.jpg'),
  },
  {
    id: 5,
    title: 'Invest in Cryptocurrency',
    date: '2025-07-05',
    location: 'FinTech Hall, NUST',
    description: 'Learn the fundamentals of investing in cryptocurrency safely and smartly.',
    image: require('../assets/images/event5.jpg'),
  },
  {
    id: 6,
    title: 'Contribute to Open-Source',
    date: '2025-07-06',
    location: 'TechHub Lahore',
    description: 'Help build the open internet by contributing to real-world open-source projects.',
    image: require('../assets/images/event6.jpg'),
  },
  {
    id: 7,
    title: 'Solve a Rubik\'s Cube',
    date: '2025-07-07',
    location: 'FAST IQ Arena',
    description: 'Put your problem-solving skills to the test in our Rubik\'s Cube challenge.',
    image: require('../assets/images/event7.jpg'),
  },
  {
    id: 8,
    title: 'Bake Pastries for Neighbors',
    date: '2025-07-08',
    location: 'Chef’s Academy Lahore',
    description: 'Spread joy with the sweet smell of pastries baked for you and your neighbors.',
    image: require('../assets/images/event8.jpg'),
  },
  {
    id: 9,
    title: 'Go See a Broadway Production',
    date: '2025-07-09',
    location: 'Karachi Arts Council',
    description: 'Enjoy the magic of live theater with a full Broadway-style performance.',
    image: require('../assets/images/event9.jpg'),
  },
  {
    id: 10,
    title: 'Write a Thank You Letter',
    date: '2025-07-10',
    location: 'Writers Lounge',
    description: 'Reflect and write a heartfelt thank-you letter to someone who made an impact.',
    image: require('../assets/images/event10.jpg'),
  },
  {
    id: 11,
    title: 'Game Night with Friends',
    date: '2025-07-11',
    location: 'UCP Common Room',
    description: 'Gather your squad for a night full of games, laughter, and bonding.',
    image: require('../assets/images/event11.jpg'),
  },
  {
    id: 12,
    title: 'Football Scrimmage',
    date: '2025-07-12',
    location: 'Model Town Sports Club',
    description: 'Play or cheer in a friendly football match with local sports lovers.',
    image: require('../assets/images/event12.jpg'),
  },
  {
    id: 13,
    title: 'Text a Long-lost Friend',
    date: '2025-07-13',
    location: 'Online',
    description: 'Reconnect with someone special from the past and relive old memories.',
    image: require('../assets/images/event13.jpg'),
  },
  {
    id: 14,
    title: 'Organize Your Pantry',
    date: '2025-07-14',
    location: 'Home Kitchen',
    description: 'Join a guided session to declutter and organize your pantry for a healthier lifestyle.',
    image: require('../assets/images/event14.jpg'),
  },
  {
    id: 15,
    title: 'Buy a New House Decoration',
    date: '2025-07-15',
    location: 'IKEA Lahore',
    description: 'Get inspired and shop for a new decoration piece to upgrade your living space.',
    image: require('../assets/images/event15.jpg'),
  },


 ];

export default function EventDetailsScreen() {
  // useLocalSearchParams() se URL ka id parameter nikaal rahe hain
  const { id } = useLocalSearchParams();
  // useRouter se navigation ke liye router milta hai
  const router = useRouter();
  // registerEvent function context se le rahe hain
  const { registerEvent } = useContext(RegisteredEventContext);

  // events array me se id match kar ke exact event nikaal rahe hain
  const event = allEvents.find(e => e.id === Number(id));

  // Agar event na mile to fallback message dikhate hain
  if (!event) return <Text style={{ color: 'white', padding: 20 }}>Event not found.</Text>;

  // Register button pe click karne se yeh function chalega
  const handleRegister = () => {
    registerEvent(event); // Event ko registeredEvents me add karta hai
    Alert.alert('Registered', `You have registered for "${event.title}"`); // Success alert
    router.push('/qr-code'); // QR page pe navigate karta hai
  };

  // Screen ka main UI
  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Event ki image dikhate hain */}
        <Image source={event.image} style={styles.image} />
        {/* Title, date, location, aur description show */}
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.meta}>📅 {event.date}</Text>
        <Text style={styles.meta}>📍 {event.location}</Text>
        <Text style={styles.description}>{event.description}</Text>
        {/* Register button */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register for Event</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

// Sab components ke liye styling yahan hai
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Screen ke top se thoda gap
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFA726',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  meta: {
    fontSize: 14,
    color: '#B0BEC5',
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    color: '#E0E0E0',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFA726',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2C5364',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
