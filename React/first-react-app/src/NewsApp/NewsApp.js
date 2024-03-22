import React, { useState,useEffect, useRef } from 'react'
import News from './News';
import './NewsApp.css';
import {dummyNews} from '../constant';
function NewsApp() {
    
    const apiKey='a80e863c98914e48bcb8295bca2f43a7';
    
    const [newsList,setNewsList]=useState([]);
    console.log(dummyNews);
    
    const [query,setQuery]=useState('tesla');
    const apiUrl=`https://newsapi.org/v2/everything?q=${query}&from=2023-12-03&sortBy=publishedAt&apiKey=a80e863c98914e48bcb8295bca2f43a7`;
    const queryInputRef=useRef(null);
    useEffect(() =>{
        fetchData();
    },[query]);

    async function fetchData()
    {
        try{
            const response=await fetch(apiUrl);
            if(response.ok == 200){
                const jsonData=await response.json();
                setNewsList(jsonData.articles);
            }else{
                setNewsList(dummyNews);
            }
        }
        catch(e){
            console.log(e,'error occured');
        }

    }

    function handleSubmit(event)
    {
        event.preventDefault();
        const queryValue=queryInputRef.current.value;
        setQuery(queryValue);
    }
  return (
    <div className='main'>
        <div className='countries-filter' style={{color:'white'}}> 
            {/* <h4>Filter By</h4> */}
            <button onClick={handleSubmit}>India</button>
        </div>
       
    <div className='news-app'>
        <div className='heading'><h1>News Daily</h1></div>
        <form onSubmit={handleSubmit}>
            <input className="query-input" type='text' ref={queryInputRef} placeholder='search'/>
            <input className="btn-submit" onClick={handleSubmit} type='submit' value="submit"/>
        </form>
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,48%)',justifyContent:'space-between',gap:'30px',rowGap:'20px'}}>
     {
        newsList.map((news) => {
            // return <p>{news.title}</p>
            return <News key={news.url} news={news} />;
        })
     }
    </div>
    </div>
    </div>
  )
}

export default NewsApp;
