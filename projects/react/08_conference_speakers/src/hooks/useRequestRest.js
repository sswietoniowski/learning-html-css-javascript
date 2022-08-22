import { useState, useEffect } from 'react';
import axios from 'axios';

export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
};

const restUrl = 'api/speakers';

const useRequestRest = () => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState('');

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const delayFunc = async () => {
      try {
        const result = await axios.get(restUrl);
        setData(result.data);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(error);
      }
    };

    delayFunc();
  }, []);

  const insertRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = [record, ...data];

    const delayFunc = async () => {
      try {
        setData(newRecords);
        await axios.post(`${restUrl}/9999`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log('error thrown inside delayFunction', error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    };

    delayFunc();
  };

  const updateRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = data.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });

    const delayFunc = async () => {
      try {
        setData(newRecords);
        await axios.put(`${restUrl}/${record.id}`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log('error thrown inside delayFunction', error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    };

    delayFunc();
  };

  const deleteRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = data.filter(function (rec) {
      return rec.id !== record.id;
    });

    const delayFunc = async () => {
      try {
        setData(newRecords);
        await axios.delete(`${restUrl}/${record.id}`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log('error thrown inside delayFunction', error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    };

    delayFunc();
  };

  return {
    data,
    requestStatus,
    error,
    insertRecord,
    updateRecord,
    deleteRecord,
  };
};

export default useRequestRest;
