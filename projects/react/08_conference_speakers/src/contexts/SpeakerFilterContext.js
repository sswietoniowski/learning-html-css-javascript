import React, { createContext } from 'react';
import useSpeakerFilter from '../hooks/useSpeakerFilter';

export const SpeakerFilterContext = createContext();

const SpeakerFilterProvider = ({ children, startingShowSessions = false }) => {
  const { showSessions, setShowSessions } =
    useSpeakerFilter(startingShowSessions);

  return (
    <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions }}>
      {children}
    </SpeakerFilterContext.Provider>
  );
};

export default SpeakerFilterProvider;
