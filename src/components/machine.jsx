import React from "react";

function generateNum() {
  return Math.floor(Math.random() * 10) + 1;
}

function Machine() {
  const results = [];

  for (let i = 0; i < 3; i++) {
    results.push(generateNum());
  }

  const isWinner = results.every(item => item === results[0]);

  const message = isWinner ? <p>Winner!!</p> : <p>Try Again!</p>;
  return (
    <div>
      {results.map(result => (
        <p key={result + Math.random()}>{result}</p>
      ))}
      {message}
    </div>
  );
}

export default Machine;
