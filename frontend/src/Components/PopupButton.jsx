import React, {useState} from 'react';

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};

function PopupButton(props) {
    const {art_supply_id, art_supply} = props
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return <div className={"result-item"}>
        <input
            type="button"
            className={"result-item-text"}
            value={art_supply_id}
            onClick={togglePopup}
        />
        {isOpen && <Popup
            content={<>
                <p>{art_supply.material_name}</p>
            </>}
            handleClose={togglePopup}
        />}
    </div>
}

export default PopupButton;