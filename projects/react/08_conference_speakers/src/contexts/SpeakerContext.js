import React, { createContext } from 'react';

export const SpeakerContext = createContext();

const SpeakerProvider = ({
  children,
  speaker,
  insertRecord,
  updateRecord,
  deleteRecord,
}) => {
  return (
    <SpeakerContext.Provider
      value={{ speaker, insertRecord, updateRecord, deleteRecord }}
    >
      {children}
    </SpeakerContext.Provider>
  );
};

export default SpeakerProvider;
