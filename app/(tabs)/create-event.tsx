// app/create-event.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CreateEventScreen() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    if (!title || !date || !location || !description) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    Alert.alert('Event Created', `🎉 "${title}" has been created successfully!`);

    // Reset form
    setTitle('');
    setDate('');
    setLocation('');
    setDescription('');
  };

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.heading}>📅 Create New Event</Text>

          <TextInput
            style={styles.input}
            placeholder="Event Title"
            placeholderTextColor="#9E9E9E"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={styles.input}
            placeholder="Date (YYYY-MM-DD)"
            placeholderTextColor="#9E9E9E"
            value={date}
            onChangeText={setDate}
          />

          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#9E9E9E"
            value={location}
            onChangeText={setLocation}
          />

          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Event Description"
            placeholderTextColor="#9E9E9E"
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity style={styles.button} onPress={handleCreate}>
            <Text style={styles.buttonText}>Create Event</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA726',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1e1e2f',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA726',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#2C5364',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
