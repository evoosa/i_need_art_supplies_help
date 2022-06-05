import React from "react";

export default function ArtTypeToggleButton(props) {
    const {stateKey, imgUrl, state, handleChoice} = props
    const currentValue = state[stateKey]
    const buttonId = "switch-new-" + stateKey

    return (
        <>
            <div className="art-types-button-wrapper">
                <div className="art-types-button-box">
                    <img className={"art-types-button-image-box"}
                         src={imgUrl}
                         alt={"art-types-img-" + stateKey}
                    />
                    <h2 className={"art-types-button-image-text"}>{stateKey}</h2>
                    <input
                        id={buttonId}
                        type="checkbox"
                        className="switch-checkbox"
                        checked={currentValue}
                        onChange={(e) => {
                            handleChoice(stateKey, e.target.checked)
                        }}
                    />
                    <label
                        style={{background: currentValue && '#c769b5'}}
                        className="switch-label"
                        htmlFor={buttonId}
                    >
                        <span className={`switch-button`}/>
                    </label>
                </div>
            </div>
        </>

    );
}