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
  let color = "";
  testedLetters?.forEach((letterState) => {
    if (letterState.letter === letter) {
      color = letterState.color;
    }
  });

  let isALetter = true;
  if (letter === "enter" || letter === "delete") {
    isALetter = false;
  }

  return (
    <>
      {isALetter ? (
        <button
          className={`${color} keypad-button`}
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
