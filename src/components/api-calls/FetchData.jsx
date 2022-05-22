import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const FetchData = (url) => {
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    async function getData() {   
     
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data);
      console.log("Fetched data",data);    
    }
    setInterval(getData,3000);
    // getData();
  }, [url,id]);
  return data;
};
