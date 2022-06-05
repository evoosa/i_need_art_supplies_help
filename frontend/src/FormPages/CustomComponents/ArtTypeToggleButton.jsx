import React from "react";

export default function ArtTypeToggleButton(props) {
    const {stateKey, imgUrl, state, handleChoice} = props
    const currentValue = state[stateKey]
    const buttonId = "react-switch-new-" + stateKey

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
                        id={buttonId}
                        type="checkbox"
                        className="react-switch-checkbox"
                        checked={currentValue}
                        onChange={(e) => {
                            handleChoice(stateKey, e.target.checked)
                        }}
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