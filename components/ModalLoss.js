import { useEffect } from "react";

export default function ModalLoss({
  setDisplayLoss,
  answer,
  setAnswer,
  setTestedWord,
  setTestedLetters,
  setCurrentIndex,
}) {
  let newAnswer;
  useEffect(() => {
    fetch("http://localhost:4000/wordle")
      .then((res) => res.json())
      .then((val) => (newAnswer = val[0].word.toUpperCase()));
  }, []);
  return (
    <div className="modal loss">
      <span>Perdu</span>
      <span>La réponse était : {answer}</span>
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
