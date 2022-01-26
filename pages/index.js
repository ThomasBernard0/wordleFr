import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";
import Guess from "../components/Guess";
import { useState, useEffect } from "react";
import { getRandomWord } from "../utils/helper";

export default function Home() {
  const [currentWord, setCurrentWord] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    setAnswer(getRandomWord());
  }, []);
  return (
    <div className="wrapper">
      <h1>Wordle FR</h1>
      <Grid />
      <Guess currentWord={currentWord} setCurrentWord={setCurrentWord} />
      <Keyboard currentWord={currentWord} setCurrentWord={setCurrentWord} />
      <div>{answer}</div>
    </div>
  );
}
