import axios from "axios";
import React, { useEffect, useState } from "react";

const Useapi = (url) => {
  const [data, setData] = useState([]);
  // const [Isloading,setIsLoading] = useState(true)
  useEffect(() => {
    const getAPi = async () => {
      const response = await axios.get(url);
      setData(response.data);
      // setIsLoading(false)
    };
    getAPi();
  }, []);
 
  return {data};
};

export default Useapi;
