import React, { useRef, useState } from "react";
import { checkValideData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import "../Style/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handelButtonClick = () => {
    const message = checkValideData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // console.log(email.current.value)
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocIn8_xFynCmHpiFenodN4yhJ6hPLrDAAA3JISqVd30AahcP_rsI=s360-c-no",
          })
            .then(() => {

              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // console.log(user)
          // ...
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {

          const user = userCredential.user;
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };
  return (
    <div>
      {/* <Header /> */}
      <div className="">
        <img
          className="w-[100vw] h-[100vh] absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
        <div className="flex justify-center   items-center border   border-pink-900">
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" form sm:p-12 p-10 bg-black 2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-7/12 w-8/12  relative mx-auto mt-32 text-white bg-opacity-80"
          >
            <h1 className=" head font-bold text-3xl py-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name "
                className="p-4 my-4 w-full bg-[#535353]"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address "
              className="p-4 btn2 my-4 w-full bg-[#535353]"
            />
            <input
              ref={password}
              type="password"
              placeholder="password "
              className="p-4 btn1 my-4 w-full bg-[#535353]"
            />
            <p className="text-red-700 font-bold">{errorMessage}</p>
            <button
              className=" btn p-4 mt-6 mb-2 w-full bg-red-700"
              onClick={handelButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {/* <div className="">
         <span className="text-gray-400 remmember">Remmeber me</span>
         <span className=" need ml-20 text-gray-400"> Need help?</span>
         </div> */}
            <p className=" para py-4 cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered?Sign In Now..  "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
