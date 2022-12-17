import RadioInput from "./RadioInput";
import actorAnna from "../assets/actor-anna.png";
import actorYoYo from "../assets/actor-yoyo.png";
import actorSkye from "../assets/actor-skye.png";
import actorMike from "../assets/actor-mike.png";
import actorVincent from "../assets/actor-vincent.png";
import actorPeter from "../assets/actor-peter.png";
import actorMay from "../assets/actor-may.png";
import RadioGroup from "./RadioGroup";

function ActorEditor() {

    return (
        <RadioGroup
            defaultSelectedIndex={1}
            selectedStyle={{color: "#3860AD", borderColor: "#3860AD"}}
            inputs={[
                <RadioInput img={actorAnna} name="Anna" />,
                <RadioInput img={actorYoYo} name="YoYo" />,
                <RadioInput img={actorSkye} name="Skye" />,
                <RadioInput img={actorMike} name="Mike" />,
                <RadioInput img={actorVincent} name="Vincent" />,
                <RadioInput img={actorPeter} name="Peter" />,
                <RadioInput img={actorMay} name="May" />
            ]}
        />
    );
}

export default ActorEditor;
