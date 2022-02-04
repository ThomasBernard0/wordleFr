import Case from "./Case";
import { useState, useEffect } from "react";

export default function Row({ word, answer, isValid, isUsed }) {
  const length = [0, 1, 2, 3, 4];
  const [letterState, setLetterState] = useState([]);
  const [letterData, setLetterData] = useState([]);
  useEffect(() => {
    setLetterData(
      word.map((letter) => {
        let letterInAnswerCount = 0;
        let letterCorrectlyPlacedCount = 0;
        for (let i = 0; i < 5; i++) {
          if (letter === answer.split("")[i]) {
            letterInAnswerCount++;
            if (word[i] === answer.split("")[i]) {
              letterCorrectlyPlacedCount++;
            }
          }
        }
        return { letter, letterInAnswerCount, letterCorrectlyPlacedCount };
      })
    );
  }, [word]);

  useEffect(() => {
    setLetterState(
      word.map((letter, index) => {
        if (letter.length === 0) return { color: "neutral", letter: "" };
        if (letter === answer[index]) return { color: "green", letter: letter };
        let color = "neutral";
        let newData = letterData;
        if (isUsed === true) {
          color = "dark";
        }
        if (
          letterData[index].letterInAnswerCount >
          letterData[index].letterCorrectlyPlacedCount
        ) {
          color = "orange";
          for (let i = 0; i < 5; i++) {
            if (letter === newData[i]?.letter) {
              newData[i].letterCorrectlyPlacedCount++;
            }
          }
        }
        return { letter, color };
      })
    );
  }, [letterData]);

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
