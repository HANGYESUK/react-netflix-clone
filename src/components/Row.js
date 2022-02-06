import axios from '../axios';
import React, {useState, useEffect} from 'react';
import "./Row.css";
import Modal from './Modal';


function Row({title, fetchUrl, isLarge=false, show, movieInfo2}) {

  const [movies, movies2] = useState([]);  

  const image_base_url = 'https://image.tmdb.org/t/p/original';

  useEffect(()=>{
    async function fetchData() {
      let res = await axios.get(fetchUrl)
      movies2(res.data.results);
    }

    fetchData()
  }, [])


  return (

    <div className='row'>
      <h2>{title}</h2>
      <div className='row-Posters'>
        {
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
        }

    
          </div>
      </div>

  )
}

function slideLeft() {
  
}

export default Row;
