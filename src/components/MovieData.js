import axios from '../axios';
import React, { useState, useEffect } from 'react'

function MovieData() {

    const API_KEY = "9624691c8f3b98996891e9ba6bfb2d06";

    const urls = [
        { fetch: `/trending/all/week?api_key=${API_KEY}&languages=en-US` },
        { fetch: `/discover/tv?api_key=${API_KEY}&with_networks=213` },
        { fetch: `/movie/top_rated?api_key=${API_KEY}&languages=en-US` },
        { fetch:`/discover/movie?api_key=${API_KEY}&with_genres=28` },
        { fetch: `/discover/movie?api_key=${API_KEY}&with_genres=35` },
        { fetch: `/discover/movie?api_key=${API_KEY}&with_genres=27` },
        { fetch: `/discover/movie?api_key=${API_KEY}&with_genres=10749` },
        { fetch: `/discover/movie?api_key=${API_KEY}&with_genres=99` },
    ]   
    

    let [movie, setMovie] = useState([]);

    useEffect(()=>{

        urls.map((item, i)=>{
            async function fetchData() {
                let res = await axios.get(item.fetch)
                console.log(res.data.results)
                let resCopy = res.data.results
                let copy = movie

                setMovie([...copy, resCopy])
            }

            fetchData()
        })

    }, [])

    console.log(movie)



  return (
    <div>MovieData</div>
  )

}


export default MovieData