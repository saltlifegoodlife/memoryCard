import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  // const [sequenceNum, setSequenceNum] = useState();
  const [sequence, setSequence] = useState([]);
  const [checkArr, setCheckArr] = useState([]);
  const [newArr, setNewArr] = useState([]);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState();
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
    setShow(true);
    let seq = [...Array(5)].map(() => Math.floor(Math.random() * 15));
    setSequence(seq);
    let chec = [...Array(5)].map(() => Math.floor(Math.random() * 15));
    setCheckArr(chec);
    let arr = sequence.concat(checkArr);
    setNewArr(arr);
  };

  console.log("this is newArr: ", newArr);

  let handleComparison = (answer) => {
    // const found = item.some((r) => newArr.indexOf(r) > 0);
    if (true) {
    } else {
    }
    // get sequence and newArr and compare each answer client selects
  };

  let handleGame = () => {};

  let handleCurrentScore = () => {};

  let handleHighScore = () => {};

  let handleResetTask = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <h2>Current Score: {currScore}</h2>
        <h2>High Score: {highScore}</h2>
      </header>
      <div id="left-div">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleResetTask}>Reset</button>
        <Counter sequence={sequence} />
      </div>
      <p>{sequence}</p>
      <p>{checkArr}</p>
      <p>{newArr}</p>
      <div id="right-div">
        <p>Watch and Remember the Sequence</p>
        <p>Was this number in the sequence?</p>
        <button onClick={handleComparison(true)}>YES</button>
        <button onClick={handleComparison(false)}>NO</button>
      </div>
    </div>
  );
}

export default App;
