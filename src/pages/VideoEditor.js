import arrowDown from "../assets/arrow-down.svg";
import editorPreview from "../assets/editor-preview.png";
import VideoPreview from "../components/VideoPreview";
import TopBar from "../components/TopBar";
import VoiceEditor from "../components/VoiceEditor";
import {Navigate, NavLink, Outlet, Route, Routes} from "react-router-dom";
import ActorEditor from "../components/ActorEditor";
import AlignmentEditor from "../components/AlignmentEditor";
import BackgroundEditor from "../components/BackgroundEditor";
import {useState} from "react";

function VideoEditor() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="*" element={<Navigate to="/editor/actor" replace />} />
                <Route path="/actor" element={<ActorEditor />} />
                <Route path="/voice" element={<VoiceEditor />} />
                <Route path="/alignment" element={<AlignmentEditor />} />
                <Route path="/background" element={<BackgroundEditor />} />
            </Route>
        </Routes>
    );
}

const Layout = () => {

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("Saying Hi to my customers");
    const [subtitle, setSubtitle] = useState("Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper");

    return (
        <div>
            <TopBar
                title={editMode ?
                    <>
                        <div style={{
                                position: "fixed",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                right: 0,
                                backgroundColor: "#FFFFFF",
                                opacity: 0.9,
                                zIndex: 10000
                            }}
                        />
                        <div className="d-flex flex-column" style={{position: "fixed", zIndex: 20000}}>
                            <input className="border-bottom" style={{color: "#3860AD", borderStyle: "none", outline: "none", width: "50rem"}} type="text" value={title} onChange={e => setTitle(e.target.value)} />
                            <textarea className="border-bottom mt-4" style={{color: "#666666", borderStyle: "none", outline: "none", fontSize: "15px"}} type="text" value={subtitle} onChange={e => setSubtitle(e.target.value)} />
                            <button
                                style={{width: "5rem"}}
                                className="btn btn-success mt-4"
                                onClick={() => {
                                    setEditMode(false);
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </>
                    : <div
                        style={{cursor: "pointer"}}
                        onClick={() => {
                            setEditMode(true);
                        }}
                    >
                        <span>{title}</span>
                        <img className="ms-3" src={arrowDown} alt="Arrow" />
                    </div>
                }
                actionBtn={
                    <div>
                        <NavLink to="/archive" type="submit" className="btn btn-secondary mb-2 me-2">Cancel</NavLink>
                        <NavLink to="/archive" type="submit" className="btn btn-success mb-2 me-5">Save</NavLink>
                    </div>
                }
            />
            <div className="d-flex flex-md-row flex-column w-100">
                <VideoPreview
                    preview={editorPreview}
                    subtitle="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"
                    tags={["Listen"]}
                />
                <div className="d-flex flex-column mt-3 mt-md-0 ms-md-3">
                    <div className="d-flex mb-3" style={{color: "#999999"}}>
                        <NavLink to="/editor/actor" className="nav-editor px-3">Actor</NavLink>
                        <NavLink to="/editor/voice" className="nav-editor px-3">Voice</NavLink>
                        <NavLink to="/editor/alignment" className="nav-editor px-3">Alignment</NavLink>
                        <NavLink to="/editor/background" className="nav-editor px-3">Background</NavLink>
                    </div>
                    <div className="px-2" style={{maxWidth: "35rem", color: "#666666"}}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoEditor;
