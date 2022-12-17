import RadioGroup from "./RadioGroup";
import RadioInput from "./RadioInput";
import Accordion from "./Accordion";
import upload from "../assets/back-upload.png";
import office from "../assets/back-office.png";
import space from "../assets/back-space.png";
import noise from "../assets/back-noise.png";
import meeting from "../assets/back-meeting.png";
import books from "../assets/back-books.png";
import desk from "../assets/back-desk.png";

function BackgroundEditor() {
    return (
        <>
            <Accordion
                name="Images"
                defaultCollapsed={false}
                value={
                    <RadioGroup
                        defaultSelectedIndex={1}
                        selectedStyle={{color: "#3860AD", borderColor: "#3860AD"}}
                        inputs={[
                            <RadioInput img={upload} name="Upload" />,
                            <RadioInput img={office} name="Office" />,
                            <RadioInput img={space} name="Space" />,
                            <RadioInput img={noise} name="Noise" />,
                            <RadioInput img={meeting} name="Meeting Room" />,
                            <RadioInput img={books} name="Books" />,
                            <RadioInput img={desk} name="Desk" />
                        ]}
                    />
                }
            />
            <Accordion
                name="Solid Colours"
                defaultCollapsed={true}
                value={
                    <RadioGroup
                        defaultSelectedIndex={1}
                        selectedStyle={{color: "#3860AD", borderColor: "#3860AD"}}
                        inputs={[
                            <RadioInput img={upload} name="Upload" />,
                            <RadioInput img={office} name="Office" />,
                            <RadioInput img={space} name="Space" />,
                            <RadioInput img={noise} name="Noise" />,
                            <RadioInput img={meeting} name="Meeting Room" />,
                            <RadioInput img={books} name="Books" />,
                            <RadioInput img={desk} name="Desk" />
                        ]}
                    />
                }
            />
            <Accordion
                name="Videos"
                defaultCollapsed={true}
                value={
                    <RadioGroup
                        defaultSelectedIndex={1}
                        selectedStyle={{color: "#3860AD", borderColor: "#3860AD"}}
                        inputs={[
                            <RadioInput img={upload} name="Upload" />,
                            <RadioInput img={office} name="Office" />,
                            <RadioInput img={space} name="Space" />,
                            <RadioInput img={noise} name="Noise" />,
                            <RadioInput img={meeting} name="Meeting Room" />,
                            <RadioInput img={books} name="Books" />,
                            <RadioInput img={desk} name="Desk" />
                        ]}
                    />
                }
            />
        </>
    );
}

export default BackgroundEditor;
