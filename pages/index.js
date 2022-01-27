import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";
import Guess from "../components/Guess";
import { useState, useEffect } from "react";
import { getRandomWord } from "../utils/helper";

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
  useEffect(() => {
    setAnswer(getRandomWord());
  }, []);
  return (
    <div className="wrapper">
      <h1>Wordle FR</h1>
      <Grid testedWord={testedWord} answer={answer} />
      <Guess currentWord={currentWord} />
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
      />
      <div>{answer}</div>
    </div>
  );
}
