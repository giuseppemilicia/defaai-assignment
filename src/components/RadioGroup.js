import React, {useState} from "react";

function RadioGroup(props) {

    const [selectedIndex, setSelectedIndex] = useState(props.defaultSelectedIndex);

    return (
        <>
            {props.inputs.map((input, idx) => React.cloneElement(input, {
                key: idx,
                style: selectedIndex === idx ? {...input.props.style, ...props.selectedStyle} : input.props.style,
                selected: selectedIndex === idx,
                onClick: () => {
                    setSelectedIndex(idx);
                }
            }))}
        </>
    );
}

export default RadioGroup;
