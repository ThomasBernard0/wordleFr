import Row from "./Row";
import { useEffect } from "react";

export default function Grid({ testedWord, answer }) {
  useEffect(() => {
    console.log("hello world");
  }, []);
  return (
    <div className="grid">
      {testedWord.map((word, index) => (
        <Row key={index} word={word} answer={answer} />
      ))}
    </div>
  );
}
