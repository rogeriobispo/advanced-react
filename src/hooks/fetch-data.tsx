import { useEffect, useState } from "react";

const useFetchData = (retrieveData) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await retrieveData()
      setData(response)
    };

    fetchData();
  }, [retrieveData]);

  return { data };
};

export default useFetchData;


