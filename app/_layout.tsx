// Expo Router se Slot component import kar rahe hain
// Slot ka matlab hota hai: jis screen ka route ho, usi ko yahan render karo
import { Slot } from 'expo-router';

// RegisteredEventProvider ko import kiya gaya hai jo context provide karta hai registered events ke liye
import { RegisteredEventProvider } from '../context/RegisteredEventContext';

// CreatedEventProvider ko import kiya gaya hai jo context provide karta hai create kiye gaye events ke liye
import { CreatedEventProvider } from '../context/CreatedEventContext';

// RootLayout naam ka component banaya gaya hai jo app ke root level pe har screen ke around context wrap karega
export default function RootLayout() {
  return (
    // Sabse pehle RegisteredEventProvider se wrap kiya gaya hai taake booking se related data available ho
    <RegisteredEventProvider>
      {/* CreatedEventProvider ke andar Slot ko rakha gaya hai taake create-event ka data bhi available ho */}
      <CreatedEventProvider>
        {/* Slot ka matlab yahan woh page render hoga jiska path match karega */}
        <Slot />
      </CreatedEventProvider>
    </RegisteredEventProvider>
  );
}
