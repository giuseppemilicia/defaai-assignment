function RadioInput(props) {
    return (
        <div onClick={props.onClick} className="d-inline-flex flex-column me-2 mb-2" style={{...props.style, width: "10rem", cursor: "pointer"}}>
            <img className="rounded-4" src={props.img} style={{border: "2px solid"}} alt="Actor or Background" />
            <span className="d-flex justify-content-center" style={{fontWeight: 500}}>{props.name}</span>
        </div>
    );
}

export default RadioInput;
