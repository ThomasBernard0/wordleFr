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
  setDisplayWin,
  setDisplayLoss,
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
              let newCurrentWord = currentWord + letter;
              setCurrentWord(newCurrentWord);
              let newTestedWord = testedWord;
              newTestedWord[currentIndex] = newCurrentWord.split("");
              setTestedWord(newTestedWord);
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
              let newCurrentWord = currentWord.slice(0, -1);
              setCurrentWord(newCurrentWord);
              let newTestedWord = testedWord;
              newTestedWord[currentIndex] = newCurrentWord.split("");
              setTestedWord(newTestedWord);
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
                setTestedLetters,
                setDisplayWin,
                setDisplayLoss
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
