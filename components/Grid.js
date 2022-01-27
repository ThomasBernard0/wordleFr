import Row from "./Row";

export default function Grid({ testedWord, answer }) {
  return (
    <div className="grid">
      {testedWord.map((word, index) => (
        <Row key={index} word={word} answer={answer} />
      ))}
    </div>
  );
}
