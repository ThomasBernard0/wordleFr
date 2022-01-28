export default function ModalVictory({ setDisplayWin }) {
  return (
    <div className="modal-victory">
      <span>Bien joué</span>
      <button onClick={() => setDisplayWin(false)}>Fermer</button>
    </div>
  );
}
