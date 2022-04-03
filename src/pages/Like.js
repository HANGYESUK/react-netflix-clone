import React from 'react';
import './Like.css';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';

function Like(props) {

    const state = useSelector((state)=>{ return state })

    const image_base_url = 'https://image.tmdb.org/t/p/original';

    console.log(state)

  return (
    <div className='like-Box'>
        <Nav/>
        <h1>찜 목록</h1>
        <div className='like-Container'>
        {
          state.length != 0
          ? state.map((item, index) => (
                <div className='movie-Box'>
                  <img
                  src={`${image_base_url}${item.poster_path}`}
                  className='like-Content'
                  />
                  {
                    item.title != null
                    ? <p>{item.title}</p>
                    : <p>{item.name}</p>
                  }
                </div>
            ))
          : <div className='movieNull'><h1>영화가 없습니다ㅠ</h1></div>
        }
      </div>
    </div>
  )
}

export default Like