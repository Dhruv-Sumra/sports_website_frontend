import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const url1="http://localhost:8000/categories";
    const url2="http://localhost:8000/players";
    const url3="http://localhost:8000/news";

    const [categories , setCategories] = useState([]);
    const [players , setPlayers] = useState([]);
    const [news , setNews] = useState([]);

    useEffect(()=>{
        fetch(url1)
        .then((res)=>{
            return res.json();
        })
        .then(data=>{
            setCategories(data)
        })
    },[url1])

    useEffect(()=>{
        fetch(url2)
        .then((res)=>{
            return res.json();
        })
        .then(data=>{
            setPlayers(data)
        })
    },[url2])

    useEffect(()=>{
        fetch(url3)
        .then((res)=>{
            return res.json();
        })
        .then(data=>{
            setNews(data)
        })
    },[url3])


  return (
    {categories , players , news }
  )
}
export default useFetch