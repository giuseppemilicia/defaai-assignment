import includedFeature from "../assets/plan-v.svg";
import excludedFeature from '../assets/plan-x.svg';

export function UserPlan(props) {
    return (
        <div className="d-flex flex-column p-4" style={{borderRadius: "10px", color: props.currentPlan ? "#FFFFFF" : "#333333", backgroundColor: props.currentPlan ? "#46B13D" : "#FFFFFF"}}>
            <h4>{props.name}</h4>
            {props.features.map((f, idx) => (
                <div key={idx} className="mb-1">
                    <img className="me-2" src={f.included ? includedFeature : excludedFeature} alt="Feature Img" />
                    <span>{f.text}</span>
                </div>
            ))}
            <div className="d-inline-flex mt-3" style={{fontWeight: 600}}>
                <span>$</span>
                <h4 style={{fontWeight: 800}}>{props.price}</h4>
            </div>
            {props.currentPlan ?
                <h4 className="align-self-center" style={{color: "#1C7714", fontWeight: 600}}>Current Plan</h4>
            : <button className="btn btn-info" style={{fontWeight: 600}}>{props.upgrade ? 'Upgrade' : 'Downgrade'}</button>}
        </div>
    );
}
