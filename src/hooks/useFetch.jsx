import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try { 
        const res = await fetch(url, {
          headers: {
            "X-Api-Key": "d644f7f3-68a0-4393-bf08-36a6db2847cc",
          },
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetch