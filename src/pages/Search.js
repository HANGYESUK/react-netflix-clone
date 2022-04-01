import React, { useEffect, useState } from 'react';
import './Search.css';
import Nav from '../components/Nav';
import MovieData from '../components/MovieData';
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import urls from "../Movieurl";

function Search(props) {

    const [movies, setMovie] = useState([]);  

    const image_base_url = 'https://image.tmdb.org/t/p/original';

    useEffect(()=>{
        async function fetchData() {
            urls.map((item, index)=>{
                let Copy = movies
                let res = axios.get(item)
                console.log(res)
                // setMovie([...Copy, res.data.results]);            
            })
    
        }

        fetchData()
        
    }, [])

    console.log(urls)

  return (
      <>
        <Nav/>
        <div className='search-Container colum'>
            <div className='poster-Container'>
                <MovieData image_base_url={image_base_url}/>
            </div>
        </div>
      </>
  )
}

export default Search;

// export default Like