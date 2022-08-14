import { useState, useEffect } from 'react';

import { data } from '../../../SpeakerData';

export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
};

const useRequestSpeakers = (delayTimeInMs = 1000) => {
  const [speakersData, setSpeakersData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
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
        setRequestStatus(REQUEST_STATUS.SUCCESS);
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(error);
      }
    };

    delayFunc(delayTimeInMs);
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
    requestStatus,
    error,
    onFavoriteToggle,
  };
};

export default useRequestSpeakers;
