export default function UndoButton({ onUndo }) {

    return (
        <button onClick={onUndo} className="btn btn-primary btn-lg">Undo ↩</button>
    );
}