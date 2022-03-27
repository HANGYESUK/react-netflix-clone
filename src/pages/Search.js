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
        <MovieData/>
        <div className='search-Container colum'>
            <div className='search-Box colum'>
                <input className='search-Bar'></input>
            </div>
            <div className='like-Container low'>
            {/* {
                movies.map(item => (
                    <img
                    src={`${image_base_url}${item.poster_path}`}
                    className={`row-poster ${isLarge && 'row-Poster-Large'}`}
                    onClick={(e)=>{
                    for(let i = 0; i<movies.length; i++) {
                        if(e.currentTarget.src == `${image_base_url}${movies[i].poster_path}`) {
                        movieInfo2(movies[i])
                        }
                    }
                    show()
                    }}/>
                ))
            } */}
                <div className='like-Content'></div>
                <div className='like-Content'></div>
                <div className='like-Content'></div>
                <div className='like-Content'></div>
                <div className='like-Content'></div>
            </div>
        </div>
      </>
  )
}

export default Search;

// export default Like