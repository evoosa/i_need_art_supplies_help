import React, {useState} from "react";
import ToggleButton from "@mui/material/ToggleButton";


export default function StandaloneToggleButton(props) {
    const [selected, setSelected] = React.useState(false);
    const [val, setVal] = useState("1");
    const toggleVal = () => {
        if (val === "0") {
            setVal("1");
        } else {
            setVal("0");
        }
        setSelected(!selected)
    };
    return (
        // <ToggleButton
        //     className="artTypesToggleButton"
        //     value={val}
        //     style={{
        //         backgroundImage: 'url(' + props.imageUrl + ')',
        //     }}
        //     selected={selected}
        //     color="info"
        //     onClick={toggleVal}
        //     onChange={props.handleToggleChange(props.activity, val)}
        // >
        //     {props.activity}
        // </ToggleButton>
        <button
            className={"artTypesToggleButton"}
            value={val}
            style={{"background-image": "url(' " +props.imageUrl + " ')"}}
            onClick={toggleVal}
            onChange={props.handleToggleChange(props.activity, val)}
        >
            {props.activity}
        </button>
    )
        ;
}
