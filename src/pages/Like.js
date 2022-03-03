import React from 'react'
import './Like.css'
import Nav from '../components/Nav'
import MovieData from '../components/MovieData'
import { connect, useSelector } from 'react-redux'

function Like(props) {

  return (
      <>
        <Nav/>
        <MovieData/>
        <div className='search-Container colum'>
            <div className='search-Box colum'>
                <input className='search-Bar'></input>
            </div>
            <div>

            </div>
        </div>
      </>
  )
}

function Movie(state) {
    return {
        state : state
    }
}

export default connect(Movie)(Like)

// export default Like