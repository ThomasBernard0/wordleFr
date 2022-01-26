import Case from "./Case";

export default function Row({ word }) {
  const lettres = word.split("");
  return (
    <div className="row">
      {lettres.map((lettre, index) => (
        <Case key={index} lettre={lettre} />
      ))}
    </div>
  );
}
