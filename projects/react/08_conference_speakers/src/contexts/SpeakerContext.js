import React, { createContext } from 'react';

export const SpeakerContext = createContext();

const SpeakerProvider = ({ children, speaker, updateRecord }) => {
  return (
    <SpeakerContext.Provider value={{ speaker, updateRecord }}>
      {children}
    </SpeakerContext.Provider>
  );
};

export default SpeakerProvider;
