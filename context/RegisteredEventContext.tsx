// React se createContext aur useState import kar rahe hain
import React, { createContext, useState } from 'react';

// Event ka structure define kiya gaya hai
type EventType = {
  id: number;            // har event ka unique ID
  title: string;         // event ka title ya naam
  date: string;          // kis tareekh ko hoga event
  location: string;      // event kaha ho raha hai
  image: any;            // image ka reference (asset se aa raha hai)
  description: string;   // event ka short tafseel
};

// Context ka type define kiya jisme registeredEvents ka array aur function hai
type ContextType = {
  registeredEvents: EventType[];                 // sab registered events ka list
  registerEvent: (event: EventType) => void;     // function jo new event register karega
};

// Context banaya gaya jisme default value di gayi hai (empty array aur khali function)
export const RegisteredEventContext = createContext<ContextType>({
  registeredEvents: [],
  registerEvent: () => {}, // default empty function (runtime pe overwrite hoga)
});

// Provider component jo context provide karega pure app me
export const RegisteredEventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State banayi gayi jisme registered events save honge
  const [registeredEvents, setRegisteredEvents] = useState<EventType[]>([]);

  // Function jo ek naya event register karega agar wo pehle se registered nahi hai
  const registerEvent = (event: EventType) => {
    // Agar event ka ID pehle se maujood hai to repeat nahi karega
    setRegisteredEvents(prev =>
      prev.some(e => e.id === event.id) ? prev : [...prev, event]
    );
  };

  // Context provider return kar rahe hain jisme value provide ki gayi hai
  return (
    <RegisteredEventContext.Provider value={{ registeredEvents, registerEvent }}>
      {children} 
    </RegisteredEventContext.Provider>
  );
};
