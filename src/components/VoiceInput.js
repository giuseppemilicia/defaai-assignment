import playRound from '../assets/play-round.svg';
import playRoundSelected from '../assets/play-round-selected.svg';
import play from '../assets/play.svg';
import pause from '../assets/pause.svg';
import voiceFlow from '../assets/voice-flow.svg';
import voiceFlowSelected from '../assets/voice-flow-selected.svg';

function VoiceInput(props) {
    return (
        <div onClick={props.onClick} className="d-inline-flex me-2 mb-2" style={{...props.style, cursor: "pointer", backgroundColor: props.selected ? "#EBF2FF" : "#F1F1F1", borderRadius: "10px"}}>
            <div className="position-relative align-self-center me-3 ms-3">
                <img src={props.selected ? playRoundSelected : playRound} alt="Play Background" />
                <img className="position-absolute top-50 start-50 translate-middle" src={props.selected ? pause : play} alt="Play Status" />
            </div>
            <div className="d-flex flex-column p-2">
                <span className="d-flex" style={{fontWeight: 600, fontSize: "12px", fontStyle: "#666666"}}>{props.name}</span>
                <img src={props.selected ? voiceFlowSelected : voiceFlow} alt="Voice Flow" />
            </div>
        </div>
    );
}

export default VoiceInput;
