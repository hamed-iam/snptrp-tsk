import axios from "axios";
import { useState } from "react";

interface ReqHook {
  endPoint: string;
  options?: any;
}

export default function useReqHook({ endPoint, options = {} }: ReqHook) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(endPoint, options);
    } catch (err) {}
  };

  return { data };
}
