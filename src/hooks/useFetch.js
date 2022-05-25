import axios from "axios";
import { useState } from "react";

const useFetch = async (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error, message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
};
export default useFetch;
