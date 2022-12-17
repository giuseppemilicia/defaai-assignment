import RadioGroup from "./RadioGroup";

function AlignmentEditor() {

    return (
        <RadioGroup
            defaultSelectedIndex={1}
            selectedStyle={{color: "#3860AD", backgroundColor: "#EBF2FF"}}
            inputs={[
                <span className="p-2 border rounded me-3" style={{backgroundColor: "#F1F1F1", cursor: "pointer"}}>Left</span>,
                <span className="p-2 border rounded me-3" style={{backgroundColor: "#F1F1F1", cursor: "pointer"}}>Center</span>,
                <span className="p-2 border rounded me-3" style={{backgroundColor: "#F1F1F1", cursor: "pointer"}}>Right</span>
            ]}
        />
    );
}

export default AlignmentEditor;
