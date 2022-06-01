import React from 'react';
import PopupButton from "./CustomComponents/PopupButton";

export class GetResults extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        this.GetResultsFromServer(this.props.state);
    }

    GetResultsFromServer(state) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state),
            // referrerPolicy: "unsafe-url"
        };
        fetch('https://i-need-art-supplies-help.pasten.life:80/get_recommended_art_supplies', requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.data === null) {
            return (
                <h1 className={"header"}>K Wait a sec..</h1>
            )
        } else {
            return <div>
                {Object.keys(this.state.data).map(key => {
                    return <PopupButton
                        key={key}
                        art_supply={this.state.data[key]}
                    />
                })}
            </div>
        }
    }

}

export default GetResults