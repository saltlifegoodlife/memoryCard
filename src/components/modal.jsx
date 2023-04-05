import React from "react";
import classes from "./modal.module.css";

const Modal = ({ final, curr, handleReset }) => {
  let html;

  switch (final) {
    case "perfect":
      html = (
        <div>
          <h1>PERFECT SCORE: 10!</h1>
          <h2>You BEAT the game!</h2>
        </div>
      );
      break;
    case "beat":
      html = (
        <div>
          <h1>NEW HIGH SCORE!</h1>
          <h2>Good Job!</h2>
          <h2>Try to beat the new high score!</h2>
        </div>
      );
      break;
    default:
      html = (
        <div>
          <h1>Good Job!</h1>
          <h2>Your score was : {curr}!</h2>
          <h2>Try to beat the high score!</h2>
        </div>
      );
      break;
  }

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {html}

        <button
          className="button-79"
          onClick={() => {
            handleReset();
          }}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default Modal;
