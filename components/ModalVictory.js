import { useEffect } from "react";

export default function ModalVictory({
  setDisplayWin,
  setAnswer,
  setTestedWord,
  setTestedLetters,
  setCurrentIndex,
}) {
  let newAnswer;
  useEffect(() => {
    fetch("http://localhost:4000/wordle/word/")
      .then((res) => res.json())
      .then((val) => (newAnswer = val[0].word.toUpperCase()));
  }, []);
  return (
    <div className="modal victory">
      <span>Bien joué</span>
      <button
        onClick={() => {
          setDisplayWin(false);
          setAnswer(newAnswer);
          setTestedWord([
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
          ]);
          setTestedLetters([]);
          setCurrentIndex(0);
        }}
      >
        Fermer
      </button>
    </div>
  );
}
