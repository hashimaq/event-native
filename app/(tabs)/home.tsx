
// React aur zaroori cheezein import kar rahe hain
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
// Gradient background ke liye LinearGradient import
import { LinearGradient } from 'expo-linear-gradient';
// Routing ke liye useRouter hook
import { useRouter } from 'expo-router';
// Apne context ko import kar rahe hain jisme user ne jo events create kiye hain wo honge
import { CreatedEventContext } from '../../context/CreatedEventContext';

// Static events jo app launch hone par default dikhaye jate hain
const staticEvents = [
  { id: 1, title: 'Do something nice for someone you care about', date: '2025-07-01', location: 'Lahore Expo Center', image: require('../../assets/images/event1.jpg') },
  { id: 2, title: 'Memorize a Poem', date: '2025-07-02', location: 'UCP Auditorium', image: require('../../assets/images/event2.jpg') },
   { id: 3, title: 'Watch a Classic Movie', date: '2025-07-03', location: 'CineStar Gulberg', image: require('../../assets/images/event3.jpg') },
  { id: 4, title: 'Watch a Documentary', date: '2025-07-04', location: 'Documentary Club', image: require('../../assets/images/event4.jpg') },
  { id: 5, title: 'Invest in Cryptocurrency', date: '2025-07-05', location: 'NEST I/O Karachi', image: require('../../assets/images/event5.jpg') },
  { id: 6, title: 'Contribute to Open-Source', date: '2025-07-06', location: 'Tech Hub Islamabad', image: require('../../assets/images/event6.jpg') },
  { id: 7, title: 'Solve a Rubik\'s Cube', date: '2025-07-07', location: 'UET Competition Hall', image: require('../../assets/images/event7.jpg') },
  { id: 8, title: 'Bake Pastries', date: '2025-07-08', location: 'Chef Academy Lahore', image: require('../../assets/images/event8.jpg') },
  { id: 9, title: 'Go See a Broadway Show', date: '2025-07-09', location: 'Broadway Karachi', image: require('../../assets/images/event9.jpg') },
  { id: 10, title: 'Write a Thank You Letter', date: '2025-07-10', location: 'Writers Circle', image: require('../../assets/images/event10.jpg') },
  { id: 11, title: 'Game Night with Friends', date: '2025-07-11', location: 'UCP Common Room', image: require('../../assets/images/event11.jpg') },
  { id: 12, title: 'Football Scrimmage', date: '2025-07-12', location: 'Model Town Sports Club', image: require('../../assets/images/event12.jpg') },
  { id: 13, title: 'Text a Long-lost Friend', date: '2025-07-13', location: 'WhatsApp Virtual Meetup', image: require('../../assets/images/event13.jpg') },
  { id: 14, title: 'Organize Your Pantry', date: '2025-07-14', location: 'Home Kitchen Setup', image: require('../../assets/images/event14.jpg') },
  { id: 15, title: 'Buy a New House Decoration', date: '2025-07-15', location: 'IKEA Lahore', image: require('../../assets/images/event15.jpg') },
];

export default function HomeScreen() {
  const router = useRouter(); // Navigation ke liye useRouter
  const { createdEvents } = useContext(CreatedEventContext); // Context se user ke banaye huye events mil rahe hain

  // Dono static aur created events ko mila kar ek list bana rahe hain
  const allEvents = [
    ...createdEvents.map((event) => ({
      ...event,
      image: require('../../assets/images/event1.jpg'), // Placeholder image har user-created event ke liye
    })),
    ...staticEvents, // Static events ko bhi list mein daal rahe hain
  ];

  // Har event card ka design yahan ban raha hai
  const renderEvent = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card} // Card ka style
      onPress={() =>
        // Jab user kisi card pe click kare to event-details screen pe le jao
        router.push({ pathname: '/event-details', params: { id: item.id } })
      }
    >
      <Image source={item.image} style={styles.image} /> {/* Event ki image */}
      <View style={styles.textContainer}> {/* Texts ka section */}
        <Text style={styles.title}>{item.title}</Text> {/* Event ka title */}
        <Text style={styles.meta}>{item.date}</Text> {/* Event ki date */}
        <Text style={styles.meta}>{item.location}</Text> {/* Event ka location */}
      </View>
    </TouchableOpacity>
  );

  // Main return jahan layout show ho raha hai
  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']} // Background ka gradient color
      style={styles.container} // Overall container style
    >
      <Text style={styles.header}>Upcoming Events</Text> {/* Heading text */}
      <FlatList
        data={allEvents} // Jo events render karne hain
        renderItem={renderEvent} // Har event ka component
        keyExtractor={(item) => item.id.toString()} // Unique key har event ke liye
        contentContainerStyle={styles.list} // List ka style
        showsVerticalScrollIndicator={false} // Scroll bar chhupa do
      />
    </LinearGradient>
  );
}

// Saare styles yahan defined hain
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    color: '#FFA726',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff10',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffffff20',
  },
  image: {
    width: '100%',
    height: 180,
  },
  textContainer: {
    padding: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  meta: {
    fontSize: 13,
    color: '#B0BEC5',
  },
});
