// app/_layout.tsx
import { Stack } from 'expo-router';
import { RegisteredEventProvider } from '../context/RegisteredEventContext';

export default function RootLayout() {
  return (
    <RegisteredEventProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </RegisteredEventProvider>
  );
}
