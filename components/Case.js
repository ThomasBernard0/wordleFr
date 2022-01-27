export default function Case({ letter, color }) {
  return <div className={`${color} case`}>{letter}</div>;
}
