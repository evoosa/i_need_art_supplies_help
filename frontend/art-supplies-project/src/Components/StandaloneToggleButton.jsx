import React, {useState} from "react";
import ToggleButton from "@mui/material/ToggleButton";

export default function StandaloneToggleButton(props) {
    const [selected, setSelected] = React.useState(true);
    const [val, setVal] = useState("1");

    const toggleDisplay = () => {
        if (val === "0") {
            setVal("1");
        } else {
            setVal("0");
        }
        setSelected(!selected)
    };
    return (
        <ToggleButton
            value={val}
            selected={selected}
            onClick={toggleDisplay}
            onChange={props.handleChange(props.activity, val)}
        >
            {props.activity} {val}
        </ToggleButton>
    );
}
