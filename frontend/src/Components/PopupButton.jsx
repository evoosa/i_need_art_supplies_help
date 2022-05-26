import React, {useState} from 'react';

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="popup-contents">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};

function PopupButton(props) {
    const {art_supply} = props
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return <div>
        <input
            type="button"
            className={"result-item-box"}
            value={art_supply.material_name}
            onClick={togglePopup}
        />
        {isOpen && <Popup
            content={<>
                <p>{art_supply.description}</p>
            </>}
            handleClose={togglePopup}
        />}
    </div>
}

export default PopupButton;