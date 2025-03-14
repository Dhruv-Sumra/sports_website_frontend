import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const url="https://dhruv-sumra.github.io/api/db.json";

    const [data , setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then(data=>{
            setData(data);
        })
    },[url])



  return (
    {data}
  )
}
export default useFetch