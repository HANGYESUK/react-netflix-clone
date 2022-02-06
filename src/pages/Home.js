import React, { useState, useContext } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../components/Row';
import urls from "../Movieurl";
import Modal from '../components/Modal';

function Home() {

  let [showModal, showModal2] = useState(false);

  let [movieInfo, movieInfo2] = useState([]);

  const show = ()=>{
    showModal2(!showModal)
  }

  return (
    <>
      <Nav/>
        {

          showModal == true 
          ?  <Modal show={show} movieInfo={movieInfo}/>
          : <div>
              <Banner/>
              <Row title="Trending Now" fetchUrl={urls.fetchTrending} isLarge show={show} movieInfo2={movieInfo2}/>
              <Row title="Top Rated" fetchUrl={urls.fetchTopRated} show={show} movieInfo2={movieInfo2}/>
              <Row title="Action Movies" fetchUrl={urls.fetchActionMovies} show={show} movieInfo2={movieInfo2}/>
              <Row title="Comedy Movies" fetchUrl={urls.fetchComedyMovies} show={show} movieInfo2={movieInfo2}/>
              <Row title="Horror Movies" fetchUrl={urls.fetchHorrorMovies} show={show} movieInfo2={movieInfo2}/>
              <Row title="Romance Movies" fetchUrl={urls.fetchRomanceMovies} show={show} movieInfo2={movieInfo2}/>
              <Row title="Documentaries" fetchUrl={urls.fetchDocumentaries} show={show} movieInfo2={movieInfo2}/>
            </div>
        }

    </>
  )
}

export default Home;
