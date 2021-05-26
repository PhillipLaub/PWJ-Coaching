import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import "./Login.css";
import {
  selectUserName,
  setUserLoginDetails,
  setSignOutState,
  selectUserPhoto,
} from "../slices/userSlice";

const Login = () => {
  //checking whether user exists in redux store
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const signIn = () => {
    if (!userName) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
      });
    } else if (userName) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        history.push("/");
      });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({ user: user.displayName, photo: user.photoUrl })
    );
  };

  return (
    <div className="login">
      <h1 className="login__heading">Rock Paper Scissors</h1>
      <div className="login__card">
        <div className="login__bar">
          <img src="/images/logo.png" alt="" />
          <button className="login__button" onClick={signIn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
