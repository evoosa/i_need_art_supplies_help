import React, {useState} from "react";

class App extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            arr: [
                {name: "first", isActive: true},
                {name: "second", isActive: true},
                {name: "third", isActive: true},
                {name: "fourth", isActive: true}
            ]
        };
    }

    onClick(index) {
        let tmp = this.state.arr;
        tmp[index].isActive = !tmp[index].isActive;
        this.setState({arr: tmp});
    }

    render() {
        return (
            <div>
                {this.state.arr.map((el, index) =>
                    <div key={index} onClick={() => this.onClick(index)}>
                        name: {el.name} / isActive: {el.isActive ? "true" : "false"}
                    </div>
                )}
            </div>
        );
    }
}

// export default function StandaloneToggleButton(props) {
const StandaloneToggleButton = (props) => {
    const {stateKey, handleChoice, imgUrl, state} = props
    const [value, setValue] = useState(false);
    const currentValue = state[stateKey]
    const id = "react-switch-new-" + stateKey
    function onChange() {
        setValue(!value)
        console.log(stateKey)
        handleChoice(stateKey, value)
    }

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
                        onChange={onChange}
                        type="checkbox"
                        className="react-switch-checkbox"
                        id={id}
                    />
                    <label
                        style={{background: currentValue && '#c769b5'}}
                        className="react-switch-label"
                        htmlFor={id}
                    >
                        <span className={`react-switch-button`}/>
                    </label>
                </div>
            </div>
        </>

    );

}

export default StandaloneToggleButton;