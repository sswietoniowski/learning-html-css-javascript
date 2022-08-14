import { useState, useEffect } from 'react';

import { data } from '../../../SpeakerData';

const useRequestSpeakers = (ms) => {
  const [speakersData, setSpeakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState('');

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const delayFunc = async (ms) => {
      try {
        await delay(ms);
        // throw 'Had error!';
        setSpeakersData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasErrored(true);
        setError(error);
      }
    };

    delayFunc(ms);
  }, []);

  const onFavoriteToggle = (id) => {
    const speakerRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite,
    };
    const speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakersDataNew);
  };

  return {
    speakersData,
    isLoading,
    hasErrored,
    error,
    onFavoriteToggle,
  };
};

export default useRequestSpeakers;
