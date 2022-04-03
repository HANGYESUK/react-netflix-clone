import axios from '../axios';
import React, { useState, useEffect } from 'react'

function MovieData(props) {

    const API_KEY = "9624691c8f3b98996891e9ba6bfb2d06";

    const image_base_url = 'https://image.tmdb.org/t/p/original';

    const urls = [
        { fetch: `/trending/all/week?api_key=${API_KEY}&language=ko` },
        { fetch: `/discover/tv?api_key=${API_KEY}&language=ko&with_networks=213` },
        { fetch: `/movie/top_rated?api_key=${API_KEY}&language=ko` },
        { fetch:`/discover/movie?api_key=${API_KEY}&language=ko&with_genres=28` },
        { fetch: `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=35` },
        { fetch: `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=27` },
        { fetch: `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=10749` },
        { fetch: `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=99` }
    ]   
    

    let [movie, setMovie] = useState([]);

    let [movieCopy, setMovieCopy] = useState([]);




    useEffect(()=>{

      let movies = [];

      function getUrl() {
        urls.map((item)=>{
          async function fetchData() {
            let res = await axios.get(item.fetch)
            console.log(movies)
            console.log(res.data.results)
            let resCopy = res.data.results

            movies = [...movies, ...resCopy]

            setMovie([...movies])
            setMovieCopy([...movies])
          }
          
          fetchData()

        })
      }

      getUrl()

    }, [])

    console.log(movie)
    console.log(movieCopy)


    const filter = (e)=>{
      console.log(e.target.value)
      let data = e.target.value
      let copy = [...movieCopy]
      let result = []

      copy.map((item, index)=>{

        if(item.title != null) {
          // console.log("title있음 : ", item.title)
          if(item.title.includes(data)) {
            console.log(item.title)
            result.push(item)
          }
          else {
            console.log("title 없음")
          }
        }
        else if(item.name != null) {
          // console.log("name있음 : ", item.name)
          if(item.name.includes(data)) {
            console.log(item.name)
            result.push(item)
          }
          else {
            console.log("name 없음")
          }
        }
        else {
          // console.log("둘 다 없음 : ", item.original_title)
          if(item.original_title.includes(data)) {
            console.log(item.original_title)
            result.push(item)
          }
          else {
            console.log("original_title 없음")
          }
        }

        // if(item.name.includes(data)) {
        //   console.log(item.name)
        // }
        // else {
        //   console.log("없음")
        // }
        // item.original_title.filter((data)=>{
        //   return data == e.target.value
        // })
        // console.log(result)
      })

      setMovie([...result])

    }



  return (
    <>
      <div className='search-Box colum'>
          <input className='search-Bar'
           onChange={filter} 
           placeholder="찾으시는 영화를 알려주세요"
           ></input>
      </div>
      <div className='search-Container'>
        {
          movie.length != 0
          ? movie.map((item, index) => (
                <img
                src={`${image_base_url}${item.poster_path}`}
                className='search-Content'
                />
            ))
          : <div className='movieNull'><h1>영화가 없습니다ㅠ</h1></div>
        }
      </div>
    </>
  )

}


export default MovieData