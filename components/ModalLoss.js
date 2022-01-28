import { useEffect } from "react";

export default function ModalVictory({
  setDisplayLoss,
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
    <div className="modal-loss">
      <span>Perdu</span>
      <button
        onClick={() => {
          setDisplayLoss(false);
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
