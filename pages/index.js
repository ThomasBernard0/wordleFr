import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";
import ModalVictory from "../components/ModalVictory";
import ModalLoss from "../components/ModalLoss";
import { useState, useEffect } from "react";
import { verification } from "../utils/helper";

export default function Home() {
  function handleKeyboard(event) {
    var letters = /^[A-Za-z]+$/;
    if (event.key.match(letters) && currentWord.length < 5) {
      let newCurrentWord = currentWord + event.key.toUpperCase();
      setCurrentWord(newCurrentWord);
      let newTestedWord = testedWord;
      newTestedWord[currentIndex] = newCurrentWord.split("");
      setTestedWord(newTestedWord);
    }
    if (event.key === "Enter") {
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
  }
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
    fetch("http://localhost:4000/wordle")
      .then((res) => res.json())
      .then((val) => setAnswer(val[0].word.toUpperCase()));
  }, []);

  return (
    <div className="wrapper" onKeyPress={handleKeyboard}>
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
          answer={answer}
          setAnswer={setAnswer}
          setTestedWord={setTestedWord}
          setTestedLetters={setTestedLetters}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
}
