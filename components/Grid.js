import Row from "./row";

export default function Grid() {
  const rows = [0, 1, 2, 3, 4, 5];
  return (
    <div className="grid">
      {rows.map((row) => (
        <Row key={row} index={row} />
      ))}
    </div>
  );
}
