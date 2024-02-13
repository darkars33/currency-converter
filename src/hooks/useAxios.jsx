import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url) =>{

  const [data, setData] = useState([]);
  const [error, setError]= useState(null);
  const [load, setLoad]= useState(false);

  useEffect(() =>{
    const fetchData= async () =>{
      try {
        setLoad(true);
        const response= await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }finally{
        setLoad(false);
      }
    }
    fetchData();
  }, [url])

  return  [data, error, load]
}

export default useAxios;