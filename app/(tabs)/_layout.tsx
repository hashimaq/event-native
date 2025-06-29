// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router'; // Tabs component import kiya jo tab-based navigation ke liye hota hai
import { Ionicons } from '@expo/vector-icons'; // Ionicons se tab icons import karne ke liye

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Har tab ke header ko hide kar diya gaya hai
        tabBarStyle: {
          backgroundColor: '#1a1a2e', // Tab bar ka background dark blue rakha gaya hai
          borderTopWidth: 0, // Upar ka border hata diya gaya hai for a cleaner look
        },
        tabBarActiveTintColor: '#FFA726', // Active tab icon/text ka color orange rakha gaya hai
        tabBarInactiveTintColor: '#B0BEC5', // Inactive tabs ka color light gray hai
        tabBarLabelStyle: { fontSize: 9, fontWeight: '100' }, // Labels ka size chota aur font thin rakha gaya hai
      }}
    >

      {/* Home Tab */}
      <Tabs.Screen
        name="home" // Yeh screen app/(tabs)/home.tsx ya home/index.tsx ke sath map hogi
        options={{
          title: 'Home', // Tab pe dikhne wala label
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />, // Home icon
        }}
      />

      {/* My Bookings Tab */}
      <Tabs.Screen
        name="my-bookings" // app/(tabs)/my-bookings.tsx
        options={{
          title: 'Bookings', // Tab ka label
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />, // Calendar icon
        }}
      />

      {/* Create Event Tab */}
      <Tabs.Screen
        name="create-event" // app/(tabs)/create-event.tsx
        options={{
          title: 'Create', // Label
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" size={size} color={color} />, // Add icon
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile" // app/(tabs)/profile.tsx
        options={{
          title: 'Profile', // Label
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />, // Person icon
        }}
      />

    </Tabs>
  );
}
