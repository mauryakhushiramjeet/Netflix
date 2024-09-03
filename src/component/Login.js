import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
            </div>
            <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input type="text"
                        placeholder='Full Name ' className='p-4 my-4 w-full bg-[#535353]' />
                )}
                <input type="text"
                    placeholder='Email Address ' className='p-4 my-4 w-full bg-[#535353]' />
                <input type="password"
                    placeholder='password ' className='p-4 my-4 w-full bg-[#535353]' />
                <button className='p-4 mt-6 mb-2 w-full bg-red-700'>
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
