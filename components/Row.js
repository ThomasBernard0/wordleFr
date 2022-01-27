import Case from "./Case";
import { useState, useEffect } from "react";

export default function Row({ word, answer }) {
  const [letterState, setLetterState] = useState([]);
  useEffect(() => {
    setLetterState(
      word.map((letter, index) => {
        if (letter.length === 0) return { color: "neutral", letter: "" };
        let color = "neutral";
        if (answer.includes(letter)) {
          color = "orange";
        }
        if (letter === answer[index]) {
          color = "green";
        }
        return { letter, color };
      })
    );
  }, [word]);

  return (
    <div className="row">
      {letterState.map((state, index) => (
        <Case key={index} letter={state.letter} color={state.color} />
      ))}
    </div>
  );
}
