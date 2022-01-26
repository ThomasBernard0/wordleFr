import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";
import Guess from "../components/Guess";
import { useState } from "react";

export default function Home() {
  const [currentWord, setCurrentWord] = useState("");
  return (
    <div className="wrapper">
      <h1>Wordle FR</h1>
      <Grid />
      <Guess currentWord={currentWord} setCurrentWord={setCurrentWord} />
      <Keyboard currentWord={currentWord} setCurrentWord={setCurrentWord} />
    </div>
  );
}
