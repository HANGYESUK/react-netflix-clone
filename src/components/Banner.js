import React from 'react';
import "./Banner.css";
import axios from "../axios";
import { useState, useEffect } from 'react';
import urls from '../Movieurl';


function Banner(show) {


    //영화설명 자르는 함수
    const cutText = (string, n) => {
        return string?.length > n ? string.substr(0, n) + "..." : string;
    }

    //영화 정보 state
    const [movie, movie2] = useState([]); 
    //axios로 받아온 데이터 한번만 result에 저장 
    useEffect(()=>{
        async function fetchData() {
            let rand = Math.floor(Math.random() * 20) //랜덤숫자 0 ~ 20 중 한개 생성

            //axios로 받아온 데이터 result에 할당할때까지 다음 작업 안함 (비동기 => 동기)
            let result = await axios.get(urls.fetchRomanceMovies) 
            movie2(result.data.results[rand]); //movie에 result결과 값중 랜덤 데이터 저장
        }

        fetchData()
    }, [])

    // console.log(movie)


    const bannerStyle = {
        backgroundSize : "cover", 
        backgroundImage : `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`, //영화배경 
        backgorundPosition : "center center"
    }



  return (
      <div className='banner' style={bannerStyle}>
          <div className='banner-Content'>
              <h1 className='banner-Title'>
                  {movie.original_title}
              </h1>
              <div className='banner-Buttons'>
                    <button className='banner-Button' onClick={show}>PLAY</button>
                    <button className='banner-Button'>My List</button>
              </div>
              <h1 className='banner-desc'>
                {cutText(movie.overview, 120)}
              </h1>
          </div>

          <div className='banner-FadeBottom'/>
      </div>
  )
}

export default Banner;
