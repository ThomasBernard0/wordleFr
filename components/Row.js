import Case from "./Case";
import { useState, useEffect } from "react";

export default function Row({ word, answer, isValid, isUsed }) {
  const length = [0, 1, 2, 3, 4];
  const [letterState, setLetterState] = useState([]);
  useEffect(() => {
    setLetterState(
      word.map((letter, index) => {
        if (letter.length === 0) return { color: "neutral", letter: "" };
        let color = "neutral";
        if (isUsed === true) {
          color = "dark";
        }
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
      {length.map((value, index) => (
        <Case
          key={index}
          letter={letterState[value]?.letter}
          color={letterState[value]?.color}
          isValid={isValid}
        />
      ))}
    </div>
  );
}
