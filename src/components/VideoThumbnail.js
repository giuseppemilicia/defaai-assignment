import more from "../assets/more.svg";
import {NavLink} from "react-router-dom";

function VideoPreview(props) {
    return (
        <NavLink to="/editor" style={{textDecoration: "none", color: "#222222"}}>
            <div className="card" style={{width: "18rem", backgroundColor: "#F4F4F4", border: "0px"}}>
                <img src={props.preview} className="card-img-top p-1" alt={props.title} />
                <img src={more} className="position-absolute mt-2 me-2 top-0 end-0" alt="More" />
                <div className="card-body">
                    <h5 className="d-flex justify-content-center card-title">{props.title}</h5>
                    <div className="d-flex justify-content-center" style={{color: "#999999"}}>
                        {props.tags.map(tag => <span key={tag} className="border rounded ps-1 pe-1 me-2">{tag}</span>)}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default VideoPreview;
