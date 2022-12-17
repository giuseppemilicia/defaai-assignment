import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import {useState} from "react";

function Accordion(props) {

    const [collapsed, setCollapsed] = useState(props.defaultCollapsed)

    return (
        <div
            className={`p-2 border-bottom ${collapsed === true ? '' : 'rounded-2'}`}
            style={{backgroundColor: (collapsed === true ? "#FFFFFF" : "#EBF2FF"), maxWidth: "35rem"}}
        >
            <div
                className="d-flex justify-content-between mb-3"
                style={{width: "30rem", cursor: "pointer"}}
                onClick={() => {
                    setCollapsed(!collapsed);
                }}
            >
                <span>{props.name}</span>
                <img src={collapsed === true ? arrowDown : arrowUp} alt="Arrow" />
            </div>
            {collapsed === false && props.value}
        </div>
    );
}

export default Accordion;
