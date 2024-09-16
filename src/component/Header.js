import React from "react";
// import logout from"../Img/logout.png"
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import "../Style/Header.css";
import { Logo } from "./Constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "./Constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.toggleGptSearch);

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handelClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className=" container absolute  px-2 py-2 bg-gradient-to-b  from-black z-10 w-screen flex justify-between">
      <img className=" logo w-44 h-20 " src={Logo} alt="logo" />
      {user && (
        <div className="flex p-2  items-center">
          {showGptSearch && (
            <select
              className="bg-gray-600 text-white py-2 rounded-lg text-center"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-purple-800 hover:bg-purple-600 py-2 px-4 my-2 mx-4  rounded-lg"
            onClick={handelClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className=" photo h-12 w-12 rounded-3xl"
            src="https://lh3.googleusercontent.com/a/ACg8ocIn8_xFynCmHpiFenodN4yhJ6hPLrDAAA3JISqVd30AahcP_rsI=s360-c-no"
            alt="user-icon-logout"
          />
          <button
            className=" photo-line font-bold text-white"
            onClick={handleSignOut}
          >
            (sign-out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
