import React, {useState} from "react";

const StandaloneToggleButton = (props) => {
    const {stateKey, handleChoice, state} = props
    const [value, setValue] = useState(false);
    const currentValue = state[stateKey]
    return (
        <>
            <input
                checked={currentValue}
                onChange={() => {
                    setValue(!value)
                    handleChoice(stateKey, value);
                }}
                type="checkbox"
                className="react-switch-checkbox"
                id={`react-switch-new`}
            />
            <label
                style={{background: currentValue && '#06D6A0'}}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`}/>
            </label>
        </>

    );

}

export default StandaloneToggleButton;