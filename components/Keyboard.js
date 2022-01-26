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
    "A",
    "Z",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "Q",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "enter",
    "W",
    "X",
    "C",
    "V",
    "B",
    "N",
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
