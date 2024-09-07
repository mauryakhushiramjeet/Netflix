import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValideData } from '../utils/Validate'
// import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
// import { auth } from '../utils/Firebase';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
const navigate=useNavigate()
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handelButtonClick = () => {
        const message = checkValideData(email.current.value, password.current.value, name.current.value)
        setErrorMessage(message)
        // console.log(email.current.value)
        if (message) return
        if (!isSignInForm) {
         
navigate("/browse")
        //     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        //     .then((userCredential) => {
        //       // Signed up 
        //       const user = userCredential.user;
        // updateProfile(user, {
        //     displayName:name.current.valu, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIn8_xFynCmHpiFenodN4yhJ6hPLrDAAA3JISqVd30AahcP_rsI=s360-c-no"
        //   }).then(() => {
        //    navigate("/browse")
        //   }).catch((error) => {
        //    setErrorMessage(message)
        //   });
        //       console.log(user)
        //       // ...
        //     })
            
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             setErrorMessage(errorCode+"-"+errorMessage)
        //         });
        // }
        // else {
        //     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        //     .then((userCredential) => {
        //       // Signed in 
        //       const user = userCredential.user;
        //       console.log(user)
        //       navigate("/browse")
        //       // ...
        //     })
        //     .catch((error) => {
        //       const errorCode = error.code;
        //       const errorMessage = error.message;
        //     setErrorMessage(errorCode+""+errorMessage)
        //     });
          
        }
    }
    return (
        <div >
            {/* <Header /> */}
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder='Full Name ' className='p-4 my-4 w-full bg-[#535353]' />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder='Email Address ' className='p-4 my-4 w-full bg-[#535353]' />
                <input
                    ref={password}
                    type="password"
                    placeholder='password ' className='p-4 my-4 w-full bg-[#535353]' />
                <p className='text-red-700 font-bold'>{errorMessage}</p>
                <button className='p-4 mt-6 mb-2 w-full bg-red-700' onClick={handelButtonClick} >
                    {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <input className='text-gray-500' type="checkbox" />
                <span className='text-gray-400'>Remmeber me</span>
                <span className='ml-20 text-gray-400'> Need help?</span>
                <p className='py-4 cursor-pointer'
                    onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?Sign In Now..  "}</p>
            </form>
        </div>
    )
}

export default Login
