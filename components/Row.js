import Case from "./Case";

export default function Row({ index }) {
  const lettres = [0, 1, 2, 3, 4];
  return (
    <div className="row">
      {lettres.map((lettre, index) => (
        <Case key={index} lettre={lettre} />
      ))}
    </div>
  );
}
