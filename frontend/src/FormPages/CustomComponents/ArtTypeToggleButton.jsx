import React, {useState} from "react";

export default function ArtTypeToggleButton(props) {
    const {stateKey, imgUrl, state, setState} = props
    const [value, setValue] = useState(!state[stateKey]);
    const currentValue = state[stateKey]
    const buttonId = "react-switch-new-" + stateKey

    function onChange() {
        setValue(!value)
        var stateObj = {};
        stateObj[stateKey] = value;
        setState(stateObj);
    }

    return (
        <>
            <div className="wrapper">
                <div className="box">
                    <img className={"art-types-button-image-box"}
                         src={imgUrl}
                         alt={"art-types-img-" + stateKey}
                    />
                    <h2 className={"art-types-button-image-text"}>{stateKey}</h2>
                    <input
                        checked={currentValue}
                        onChange={onChange}
                        type="checkbox"
                        className="react-switch-checkbox"
                        id={buttonId}
                    />
                    <label
                        style={{background: currentValue && '#c769b5'}}
                        className="react-switch-label"
                        htmlFor={buttonId}
                    >
                        <span className={`react-switch-button`}/>
                    </label>
                </div>
            </div>
        </>

    );
}