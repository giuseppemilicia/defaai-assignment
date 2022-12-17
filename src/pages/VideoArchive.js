import archive1 from "../assets/archive-1.png";
import TopBar from "../components/TopBar";
import VideoThumbnail from "../components/VideoThumbnail";
import {NavLink} from "react-router-dom";

function VideoArchive() {
    return (
        <div>
            <TopBar
                title="Saved Videos"
                actionBtn={<NavLink to="/editor" className="btn btn-primary mb-2 me-5">Create New</NavLink>}
            />
            <div className="d-flex w-100">
                <VideoThumbnail preview={archive1} title="Saying Hi to users!" tags={["Email", "Marketing", "Greeting"]} />
            </div>
        </div>
    );
}

export default VideoArchive;
