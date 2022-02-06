import React from 'react';
import { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, show2] = useState(false);
  
  const scrollNavbar = ()=>{
    // console.log(window.scrollY)
    let scroll = parseInt(window.scrollY)
    if(scroll  > 100) {
      show2(true)
    }
    else {
      show2(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollNavbar)
    return ()=>window.removeEventListener("scroll", scrollNavbar)
  }, [show])


  return (
    <div className={`nav ${show && 'nav-Black'}`}>
        <div className='nav-Contents'>
          <a href='/'>
            <img
                className='nav-Logo'
                src='https://www.4flix.co.kr/data/file/gallery/1938524331_VHMpcxQR_9b8495c397c63babae72a7bda3a971c21b61b887.png'
                alt=''/>
            </a>
            <a href='/signUp'>
              <img
                  className='nav-Avatar'
                  src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png'
                  alt=''/>
            </a>
        </div>
    </div>
    )
}

export default Nav;
