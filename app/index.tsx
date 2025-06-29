// expo-router se useRouter hook import kar rahe hain navigation ke liye
import { useRouter } from 'expo-router';
// useEffect hook import kar rahe hain React se
import { useEffect } from 'react';
// React Native ke kuch built-in components import kar rahe hain
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// Default exported functional component
export default function Index() {
  // router object le rahe hain navigation ke liye
  const router = useRouter();

  // Component jab mount hota hai to yeh useEffect chalega
  useEffect(() => {
    // Ek chhoti delay set kar rahe hain (100ms) takay splash screen pe redirect ho
    const timer = setTimeout(() => {
      router.replace('/splash'); // Replace current route with /splash
    }, 100); // Sirf 100ms delay

    // Jab component unmount ho to timer clear kar dena (memory leak avoid karne ke liye)
    return () => clearTimeout(timer);
  }, []);

  // Screen ka visual part — sirf ek loader dikh raha hai
  return (
    <View style={styles.container}>
      {/* Spinner show kar raha hai jab tak splash redirect nahi hoti */}
      <ActivityIndicator size="large" color="#FFA726" />
    </View>
  );
}

// StyleSheet define kar rahe hain for this screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen
    justifyContent: 'center', // Vertically center
    alignItems: 'center', // Horizontally center
    backgroundColor: '#0f0c29', // Dark background
  },
});
