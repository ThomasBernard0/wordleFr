import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";
import ModalVictory from "../components/ModalVictory";
import ModalLoss from "../components/ModalLoss";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentWord, setCurrentWord] = useState("");
  const [answer, setAnswer] = useState("");
  const [testedWord, setTestedWord] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testedLetters, setTestedLetters] = useState([]);
  const [displayWin, setDisplayWin] = useState(false);
  const [displayLoss, setDisplayLoss] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/wordle/word/")
      .then((res) => res.json())
      .then((val) => setAnswer(val[0].word.toUpperCase()));
  }, []);

  return (
    <div className="wrapper">
      <h1>Wordle FR</h1>
      <Grid
        testedWord={testedWord}
        answer={answer}
        currentIndex={currentIndex}
      />
      <Keyboard
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
        answer={answer}
        testedWord={testedWord}
        setTestedWord={setTestedWord}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        testedLetters={testedLetters}
        setTestedLetters={setTestedLetters}
        setDisplayWin={setDisplayWin}
        setDisplayLoss={setDisplayLoss}
      />
      <div className="secret">{answer}</div>
      {displayWin && (
        <ModalVictory
          setDisplayWin={setDisplayWin}
          setAnswer={setAnswer}
          setTestedWord={setTestedWord}
          setTestedLetters={setTestedLetters}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {displayLoss && (
        <ModalLoss
          setDisplayLoss={setDisplayLoss}
          setAnswer={setAnswer}
          setTestedWord={setTestedWord}
          setTestedLetters={setTestedLetters}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
}
