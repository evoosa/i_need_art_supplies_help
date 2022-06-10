import React, {useState} from 'react';

const Popup = props => {
    return (
        <div className="results-popup-box">
            <div className="results-popup-contents">
                <span className="results-close-icon" onClick={props.handleClose}>x</span>
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
        <img
            className={"art-types-button-image-box"}
            src={"https://art-supplies-images.pasten.life/images/" + art_supply.img_filename}
            alt={"art-supply-" + art_supply.img_filename}
        />
        <input
            type="button"
            className={"results-item-box"}
            value={art_supply.material_name}
            onClick={togglePopup}
        />
        <br/>
        {isOpen && <Popup
            content={<>
                <h2 style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    color: "#c769b5"
                }}>{art_supply.material_name}</h2>
                <h2 className={"results-popup-header"}>description</h2>
                <p>
                    {art_supply.description}
                </p>
                <br/>
                <img className={"results-popup-image-box"}
                     src={"https://art-supplies-images.pasten.life/images/" + art_supply.img_filename}
                     alt={"art-supply-" + art_supply.img_filename}
                />

                <br/>
                <h2 className={"results-popup-header"}>Prices</h2>
                <p>
                    starts from {art_supply.min_price_ils} ILS per {art_supply.price_per}
                    {(art_supply.available_in_set === '0' ? ', it\'s available in sets' : '')}
                    {(art_supply.available_in_singles === '0' ? ', it\'s available in singles.' : '')}
                </p>
                <h2 className={"results-popup-header"}>Availability</h2>
                <p>
                    in {art_supply.stores}
                </p>
                <h2 className={"results-popup-header"}>Experience Level</h2>
                <p>
                    {(art_supply.experience_level === '0' ? 'no previous experience is required' : '')}
                    {(art_supply.experience_level === '1' ? 'requires a bit of experience, artistic orientation is more than enough' : '')}
                    {(art_supply.experience_level === '2' ? 'previous experience is preferable' : '')}
                </p>
                <h2 className={"results-popup-header"}>Good To Know</h2>
                <p>
                    {(art_supply.compact === '0' ? 'it\'s compact and can be carried around. ' : '')}
                    {(art_supply.messy === '0' ? 'beware that it\'s a bit of messy. ' : '')}
                    {(art_supply.safe_bet === '0' ? 'it\'s a safe bet so you can\'t fuckup with this one. ' : '')}
                    {(art_supply.together === '0' ? 'it can be enjoyed together which is nice. ' : '')}
                </p>
            </>}
            handleClose={togglePopup}
        />}
    </div>
}

export default PopupButton;