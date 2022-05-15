import React, {useState} from "react";

const StandaloneToggleButton = (props) => {
    const {stateKey, handleChoice, imgUrl, state} = props
    const [value, setValue] = useState(false);
    const currentValue = state[stateKey]
    return (
        <>
            <div className="wrapper">
                <div className="box">
                    <img className={"art-types-button-image-box"}
                         src={imgUrl}
                    />
                    <h2 className={"art-types-button-image-text"}>{stateKey}</h2>
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
                        style={{background: currentValue && '#c769b5'}}
                        className="react-switch-label"
                        htmlFor={`react-switch-new`}
                    >
                        <span className={`react-switch-button`}/>
                    </label>
                </div>
            </div>
        </>

    );

}

export default StandaloneToggleButton;