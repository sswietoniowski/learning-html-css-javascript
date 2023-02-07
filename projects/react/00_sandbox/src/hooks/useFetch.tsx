import { useState, useEffect } from 'react';

const useFetch = (url: string, options?: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setData(data);
        setError(null);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
        setData(null);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
