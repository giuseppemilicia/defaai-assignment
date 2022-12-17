function VideoPreview(props) {
    return (
        <div className="card d-flex" style={{color: "#999999", backgroundColor: "#F4F4F4", border: "0px"}}>
            <div className="position-relative p-3 pb-0">
                <img src={props.preview} className="card-img-top" alt={props.title} />
                <span className="position-absolute bottom-0 start-50 translate-middle rounded p-2" style={{color: "#3860AD", backgroundColor: "#EBF2FF"}}>Preview</span>
            </div>
            <div className="w-100 p-3">
                <div className="rounded-5 p-3" style={{backgroundColor: "#FFFFFF", border: "0px"}}>
                    <span>{props.subtitle}</span>
                    <div className="mt-5">
                        {props.tags.map(tag => <span key={tag} className="rounded p-2 me-2" style={{backgroundColor: "#F1F1F1"}}>{tag}</span>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPreview;
