import React, { createContext, useState } from 'react';

// Define the shape of your event
type EventType = {
  id: number;
  title: string;
  date: string;
  location: string;
  image: any;
  description: string;
};

type ContextType = {
  registeredEvents: EventType[];
  registerEvent: (event: EventType) => void;
};

export const RegisteredEventContext = createContext<ContextType>({
  registeredEvents: [],
  registerEvent: () => {},
});

export const RegisteredEventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registeredEvents, setRegisteredEvents] = useState<EventType[]>([]);

  const registerEvent = (event: EventType) => {
    // Prevent duplicate registrations
    setRegisteredEvents(prev =>
      prev.some(e => e.id === event.id) ? prev : [...prev, event]
    );
  };

  return (
    <RegisteredEventContext.Provider value={{ registeredEvents, registerEvent }}>
      {children}
    </RegisteredEventContext.Provider>
  );
};
