import React, { useState } from 'react'
// import logout from"../Img/logout.png"
import {auth} from"../utils/Firebase"
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Header = () => {
  // const user=useSelector((store)=>store.user)
  const[show,SetShow]=useState(true)
  const navigate=useNavigate()
  const handleSignOut=()=>{
    SetShow(!show)
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between' >
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
     {show&&( <div className='flex p-2'>
        <img  className='h-12 w-12 rounded-3xl'
        src="https://lh3.googleusercontent.com/a/ACg8ocIn8_xFynCmHpiFenodN4yhJ6hPLrDAAA3JISqVd30AahcP_rsI=s360-c-no" alt='user-icon-logout'/>
        <button className='font-bold text-white' onClick={handleSignOut}>(sign-out)</button>
      </div>)}
    </div>
  )
}

export default Header
