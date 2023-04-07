import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Modal from "./components/modal";

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [temp, setTemp] = useState([]);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [final, setFinal] = useState("");

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  let handleStart = () => {
    setCurrScore(0);
    setCount(0);
    setShowGame(false);
    setShow(true);
    let seq = [...Array(5)].map(() => Math.floor(Math.random() * 15));
    setSequence(seq);
    let chec = [...Array(5)].map(() => Math.floor(Math.random() * 15));

    let arr = seq.concat(chec);
    console.log(arr);
    arr = shuffle(arr);
    setTemp(arr);
  };

  //might be in new component
  let handleComparison = (answer) => {
    //if true check if item IS in sequence
    //if false check if item is NOT in sequence
    let wrong = 0;
    console.log(answer);
    if (count <= temp.length) {
      let test = temp[count];
      if (answer) {
        let result = sequence.some((num) => num === test);
        if (result) {
          setCurrScore(currScore + 1);
          setCount(count + 1);
        } else {
          if (currScore > 0) {
            setCurrScore(currScore - 1);
            setCount(count + 1);
            wrong++;
          } else {
            setCurrScore(0);
            setCount(count + 1);
            wrong++;
          }
        }
      } else {
        let result = sequence.some((num) => num === test);
        if (result) {
          if (currScore > 0) {
            setCurrScore(currScore - 1);
            setCount(count + 1);
            wrong++;
          } else {
            setCurrScore(0);
            setCount(count + 1);
            wrong++;
          }
        } else {
          setCurrScore(currScore + 1);
          setCount(count + 1);
        }
      }
    }
    console.log(count);
    console.log(currScore);
    if (count === 9) {
      console.log(currScore);
      if (currScore === 9 && wrong === 0) {
        //add modal with score with replay button
        setHighScore(10);
        setCurrScore(0);
        setFinal("perfect");
      } else if (currScore > highScore) {
        //add modal beat high score! with play again button.
        setHighScore(currScore);
        setFinal("beat");
      } else {
        //if player hits 10 points, PERFECT SCORE! add modal with play again button.
        setFinal("");
      }
      setModalShow(true);
    }
  };

  let showGameTask = (e) => {
    setShow(false);
    setTimeout(() => {
      setShowGame(e);
    }, 2000);
  };

  let handleResetTask = () => {
    setShow(false);
    setShowGame(false);
    setCurrScore(0);
    setModalShow(false);
    setCount(0);
  };

  return (
    <div className="App">
      <div className="main">
        <header className="head">
          <h1>Memory Game</h1>
          <h2>Current Score: {currScore}</h2>
          <h2>High Score: {highScore}</h2>
        </header>
        <div className="content">
          <div id="left-div">
            <div className="left-inner">
              {show && <Counter sequence={sequence} showGame={showGameTask} />}
              {showGame && (
                <div>
                  <h1>{temp[count]}</h1>
                </div>
              )}
              <div className="button-div">
                <button className="button-79" onClick={handleStart}>
                  Start
                </button>
                <button className="button-79 red" onClick={handleResetTask}>
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div id="right-div">
            <p>"Watch and Remember the Sequence"</p>
            {showGame && (
              <div>
                <p>Was this number in the sequence?</p>
                <div className="button-div">
                  <button
                    className="button-79"
                    onClick={() => {
                      handleComparison(true);
                    }}
                  >
                    YES
                  </button>
                  <button
                    className="button-79 red"
                    onClick={() => {
                      handleComparison(false);
                    }}
                  >
                    NO
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {modalShow && (
          <Modal final={final} curr={currScore} handleReset={handleResetTask} />
        )}
      </div>
    </div>
  );
}

export default App;
