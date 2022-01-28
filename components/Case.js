export default function Case({ letter, color, isValid }) {
  return <div className={`${isValid && color} case`}>{letter}</div>;
}
