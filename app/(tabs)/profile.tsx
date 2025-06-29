// React aur state hooks import kiye ja rahe hain
import React, { useEffect, useState } from 'react';
// UI components import ho rahe hain React Native se
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, Image } from 'react-native';
// Gradient background ke liye LinearGradient import kiya gaya hai
import { LinearGradient } from 'expo-linear-gradient';
// Local storage (AsyncStorage) ka import jo data store/retrieve karta hai
import AsyncStorage from '@react-native-async-storage/async-storage';
// Navigation ke liye router hook use ho raha hai
import { useRouter } from 'expo-router';

// Profile screen component banaya gaya hai
export default function ProfileScreen() {
  // user ka data rakhne ke liye state banayi gayi hai
  const [user, setUser] = useState({
    name: '', email: '', role: '', registeredOn: '',
  });
  // loading indicator ke liye ek state banayi gayi hai
  const [loading, setLoading] = useState(true);
  // Router object le rahe hain taake navigation kar saken
  const router = useRouter();

  // Component load hone ke baad user ka data AsyncStorage se nikalna
  useEffect(() => {
    const loadUser = async () => {
      try {
        // 4 alag-alag cheezen retrieve kar rahe hain storage se
        const name = await AsyncStorage.getItem('userName');
        const email = await AsyncStorage.getItem('userEmail');
        const role = await AsyncStorage.getItem('userRole');
        const registeredOn = await AsyncStorage.getItem('registrationDate');

        // Agar kuch mil jaye to usi ko, warna default values set kar deni
        setUser({
          name: name || 'Guest User',
          email: email || 'Not found',
          role: role || 'Standard User',
          registeredOn: registeredOn || 'Unknown',
        });
      } catch (err) {
        // Agar kuch error ho to console me error show karo
        console.error('Failed to load user data:', err);
      } finally {
        // Loading false kar dena jab kaam ho jaye
        setLoading(false);
      }
    };

    // Function ko call kar rahe hain
    loadUser();
  }, []);

  // Logout ka function — sab user data storage se hata do
  const handleLogout = async () => {
    await AsyncStorage.multiRemove(['userName', 'userEmail', 'userRole', 'registrationDate']);
    Alert.alert('Logged Out', 'You have been successfully logged out.');
    router.replace('/login'); // Login page pe redirect kar dena
  };

  // Jab tak loading true hai, loading indicator dikhayenge
  if (loading) {
    return (
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
        <ActivityIndicator size="large" color="#FFA726" />
      </LinearGradient>
    );
  }

  // Agar loading nahi hai to actual screen dikhayenge
  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      {/* Avatar image show kar rahe hain */}
      <Image
        source={require('../../assets/images/admin.jpg')}
        style={styles.avatar}
      />
      {/* Naam show kar rahe hain */}
      <Text style={styles.name}>{user.name}</Text>

      {/* Card jisme saara user data dikh raha hai */}
      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Role</Text>
        <Text style={styles.value}>{user.role}</Text>

        <Text style={styles.label}>Registered On</Text>
        <Text style={styles.value}>{user.registeredOn}</Text>

        {/* Logout ka button */}
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// Sab components ke liye style define kiya gaya hai
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Round avatar
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#FFA726',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA726',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1a1a2e',
    padding: 25,
    borderRadius: 16,
    width: '100%',
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: '#9E9E9E',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFA726',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2C5364',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
