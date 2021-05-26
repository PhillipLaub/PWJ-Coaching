import React from "react";
import "./ScoreBoard.css";
import { useSelector } from "react-redux";
import { selectScore } from "../slices/gameSlice";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
} from "../slices/userSlice";

const ScoreBoard = (user) => {
  const score = useSelector(selectScore);

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOutState());
      history.push("/");
    });
  };

  console.log(userName);

  return (
    <div>
      <div className="logout">
        <button onClick={signOut}>LOGOUT</button>
        <h1>{userName}</h1>
      </div>
      <div className="scoreboard">
        <div className="scoreboard__gameName">
          <img
            src="/images/RockPaperScissorsText.svg"
            alt="RockPaperScissorsText"
          />
        </div>

        <div className="scoreboard__score">
          <p>Score</p>
          <h1>{score}</h1>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
