// Import useState hook
import './NumberMoves.css'
export default function NumberMoves({numberMoves}) {    
    return (
        <div>
            <p className="numberMoves text-primary display-2 nowrap"># of moves:<br/> {numberMoves}</p>
        </div>
    );
}