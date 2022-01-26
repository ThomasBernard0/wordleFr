import Row from "./row";

export default function Grid({ testedWord }) {
  return (
    <div className="grid">
      {testedWord.map((word, index) => (
        <Row key={index} word={word} />
      ))}
    </div>
  );
}
