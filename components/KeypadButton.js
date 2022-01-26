export default function KeypadButton({ letter, currentWord, setCurrentWord }) {
  let isALetter = true;
  if (letter === "enter" || letter === "delete") {
    isALetter = false;
  }
  return (
    <>
      {isALetter ? (
        <button
          className="keypad-button"
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
            }
          }}
        >
          {letter}
        </button>
      )}
    </>
  );
}
