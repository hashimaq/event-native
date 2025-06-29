// React se zaroori cheezein import ki ja rahi hain
import React, { createContext, useState } from 'react';

// event ka type define kiya gaya hai (yeh ek event ka structure hai)
type EventType = {
  id: number; // event ki unique pehchaan
  title: string; // event ka naam
  date: string; // kis din hoga
  location: string; // kaha hoga
  description: string; // kya hai event ka maqsad
};

// context ka type define kiya gaya jisme do cheezein hain
type CreatedEventContextType = {
  createdEvents: EventType[]; // sare create kiye gaye events ka array
  addEvent: (event: EventType) => void; // naya event add karne wali function
};

// context banaya gaya default value ke sath (empty array aur dummy function)
export const CreatedEventContext = createContext<CreatedEventContextType>({
  createdEvents: [],
  addEvent: () => {}, // filhal empty function hai
});

// provider component banaya gaya jisme context ka actual logic hoga
export const CreatedEventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // state banayi gayi jisme sare created events store honge
  const [createdEvents, setCreatedEvents] = useState<EventType[]>([]);

  // yeh function naye event ko add karta hai purane events ke array me
  const addEvent = (event: EventType) => {
    setCreatedEvents(prev => [...prev, event]); // naye event ko existing list me jodte hain
  };

  // yahan provider ke zariye sare children components ko data aur function access diya ja raha hai
  return (
    <CreatedEventContext.Provider value={{ createdEvents, addEvent }}>
      {children}
    </CreatedEventContext.Provider>
  );
};
