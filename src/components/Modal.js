import React from 'react';
import './Modal.css';

function Modal({show, movieInfo}) {


    const image_base_url = 'https://image.tmdb.org/t/p/original';

    //영화설명 자르는 함수
    const cutText = (string, n) => {
        return string?.length > n ? string.substr(0, n) + "..." : string;
    }

    const modalStyle = {
        backgroundSize : "cover", 
        backgroundImage : `url(${image_base_url}${movieInfo.poster_path})`, //영화배경 
    }

  return (
      <div className='modal'>
        <div className='modal-Container' style={modalStyle}>
            <button onClick={show} className='btn'><h3>X</h3></button>
            <div className='modal-Img'/>
            <div className='modal-Box'>
                <div className='modal-Btn-Box'>
                    <div className='title'><h3>{movieInfo.original_title}</h3></div>
                    <div className='modal-Btn'>찜하기</div>
                    <a href={`https://www.youtube.com/results?search_query=${movieInfo.original_title}`}><div className='modal-Btn'>예고편</div></a>
                    
                </div>
                <div className='overview'>
                    <p>{cutText(movieInfo.overview, 100)}</p>
                </div>
            </div>
            <div className='modal-FadeBottom'/>
        </div>
      </div>
  )
}

export default Modal;
