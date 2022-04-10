import React, { useState, useContext } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../components/Row';
import urls from "../Movieurl";
import Modal from '../components/Modal';

function Home({show, movieInfo2}) {

  return (
    <>
      <Nav/>
        <div id='home-Container'>
          <Banner/>
          <Row title="지금 뜨는 콘텐츠 " fetchUrl={urls.fetchTrending} isLarge show={show} movieInfo2={movieInfo2}/>
          <Row title="TOP 콘텐츠" fetchUrl={urls.fetchTopRated} show={show} movieInfo2={movieInfo2}/>
          <Row title="액션" fetchUrl={urls.fetchActionMovies} show={show} movieInfo2={movieInfo2}/>
          <Row title="코메디" fetchUrl={urls.fetchComedyMovies} show={show} movieInfo2={movieInfo2}/>
          <Row title="호러" fetchUrl={urls.fetchHorrorMovies} show={show} movieInfo2={movieInfo2}/>
          <Row title="로맨스" fetchUrl={urls.fetchRomanceMovies} show={show} movieInfo2={movieInfo2}/>
          <Row title="별개의 콘텐츠" fetchUrl={urls.fetchDocumentaries} show={show} movieInfo2={movieInfo2}/>
        </div>

    </>
  )
}

export default Home;
