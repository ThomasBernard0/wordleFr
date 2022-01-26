import KeypadButton from "./KeypadButton";

export default function Keyboard({
  currentWord,
  setCurrentWord,
  answer,
  testedWord,
  setTestedWord,
  currentIndex,
  setCurrentIndex,
}) {
  const keypadButtons = [
    "a",
    "z",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "q",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "enter",
    "w",
    "x",
    "c",
    "v",
    "b",
    "n",
    "delete",
  ];
  return (
    <div className="keyboard">
      {keypadButtons.map((button) => (
        <KeypadButton
          key={button}
          letter={button}
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          answer={answer}
          testedWord={testedWord}
          setTestedWord={setTestedWord}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ))}
    </div>
  );
}
