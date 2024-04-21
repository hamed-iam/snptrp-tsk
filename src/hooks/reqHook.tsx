import axios from "axios";
import { useEffect, useState } from "react";

interface ReqHook {
  endPoint: string;
  options?: any;
}

export default function useReqHook({ endPoint, options = {} }: ReqHook) {
  const [data, setData] = useState([]);
  const [loading, setLoadin] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    setLoadin(true);
    try {
      const res = await axios.get(endPoint, options);
      setData(res.data);
      setLoadin(false);
      setError(null);
    } catch (err) {
      setError(err);
      setLoadin(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return { data, loading, error };
}
