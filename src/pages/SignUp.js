import React, { useRef } from 'react';
import { getAuth, signInWithCustomToken } from "firebase/auth";
import './SignUp.css';


function SignUp() {

    const email = useRef(null);
    const password = useRef(null);



    const signUp = (e) => {
        const auth = getAuth();
        auth.createUserWithEmailAndPassword(email, password)
            .then(
                (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const signIn = (e)=>{
        e.preventDefault();
        console.log(email.value)
        console.log(password.value)
    }

  return (
        <div className='logIn'>
            <a href='/'>
                <img className='login-Logo' src="https://www.4flix.co.kr/data/file/gallery/1938524331_VHMpcxQR_9b8495c397c63babae72a7bda3a971c21b61b887.png"/>
            </a>
            <div className='signup-Down'></div>
            <div className='signUp'>
                <form>
                    <h1>Login</h1>
                    <input ref={email} type="email" placeholder='Email'/>
                    <input ref={password} type="password" placeholder='Password'/>
                    <button type='submit' onClick={signIn}>로그인</button>
                </form>

                <div>
                    <span className='signup-Gray'>
                        입장하고 싶으면
                    </span>
                    <span className='signup-Link' onClick={signUp}>
                        1분만에 가입하세요!
                    </span>
                </div>
            </div>
        </div>

  )
}

export default SignUp;
