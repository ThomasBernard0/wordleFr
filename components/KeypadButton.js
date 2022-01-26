export default function KeypadButton({ value }) {
  return (
    <>
      {value === "enter" || value === "delete" ? (
        <button className="keypad-button span-2">{value}</button>
      ) : (
        <button className="keypad-button">{value}</button>
      )}
    </>
  );
}
