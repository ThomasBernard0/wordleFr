import Row from "./Row";

export default function Grid({ testedWord, answer, currentIndex }) {
  return (
    <div className="grid">
      {testedWord.map((word, index) => (
        <Row
          key={index}
          word={word}
          answer={answer}
          isValid={currentIndex !== index}
          isUsed={currentIndex >= index}
        />
      ))}
    </div>
  );
}
