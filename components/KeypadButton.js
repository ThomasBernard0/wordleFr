import { verification } from "../utils/helper";

export default function KeypadButton({
  letter,
  currentWord,
  setCurrentWord,
  answer,
  testedWord,
  setTestedWord,
  currentIndex,
  setCurrentIndex,
  testedLetters,
  setTestedLetters,
}) {
  let color = "keypad-button";
  if (testedLetters.includes(letter)) {
    if (answer.split("").includes(letter)) {
      color = "keypad-button orange";
    } else {
      color = "keypad-button dark";
    }
  }

  let isALetter = true;
  if (letter === "enter" || letter === "delete") {
    isALetter = false;
  }
  return (
    <>
      {isALetter ? (
        <button
          className={color}
          onClick={() => {
            if (currentWord.length < 5) {
              setCurrentWord(currentWord + letter);
            }
          }}
        >
          {letter}
        </button>
      ) : (
        <button
          className="keypad-button span-2"
          onClick={() => {
            if (letter === "delete") {
              setCurrentWord(currentWord.slice(0, -1));
            } else if (letter === "enter") {
              verification(
                currentWord,
                setCurrentWord,
                answer,
                testedWord,
                setTestedWord,
                currentIndex,
                setCurrentIndex,
                testedLetters,
                setTestedLetters
              );
            }
          }}
        >
          {letter}
        </button>
      )}
    </>
  );
}
