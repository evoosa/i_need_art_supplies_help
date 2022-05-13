import React, {useState} from "react";

export default function StandaloneToggleButton(props) {
    const [selected, setSelected] = React.useState(false);
    const [val, setVal] = useState("1");
    const [like, setLike] = useState("")
    const toggleVal = () => {
        if (val === "0") {
            setVal("1");
            setLike("doesn't like")
        } else {
            setVal("0");
            setLike("likes")
        }
        setSelected(!selected)
    };
    return (
        <button
            className={"artTypesToggleButton"}
            value={val}
            style={{backgroundImage: "url(' " + props.imageUrl + " ')"}}
            onClick={toggleVal}
            onChange={props.handleToggleChange(props.activity, val)}

        >
            {like} {props.activity}
        </button>
    )
        ;
}
