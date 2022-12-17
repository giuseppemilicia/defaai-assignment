import RadioGroup from "./RadioGroup";
import VoiceInput from "./VoiceInput";

function VoiceEditor() {
    return (
        <RadioGroup
            defaultSelectedIndex={0}
            selectedStyle={{color: "#3860AD"}}
            inputs={[
                <VoiceInput name="Asian" />,
                <VoiceInput name="British" />,
                <VoiceInput name="American" />
            ]}
        />
    );
}

export default VoiceEditor;
