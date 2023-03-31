import React, { useState, useEffect } from "react";

function Counter({ sequence, newArr }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout;
    if (count <= sequence.length - 1) {
      timeout = setTimeout(() => setCount(count + 1), 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [sequence, count]);

  return (
    <div>
      <h1>{sequence[count]}</h1>
      <p>{newArr}</p>
    </div>
  );
}

export default Counter;
