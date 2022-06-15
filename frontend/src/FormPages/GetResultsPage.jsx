import React from 'react';
import PopupButton from "../CustomComponents/PopupButton";

export class GetResultsPage extends React.Component {

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
            body: JSON.stringify(state)
        };
        fetch(process.env.REACT_APP_BACKEND_URL + 'get_recommended_art_supplies', requestOptions)
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
            if (Object.keys(this.state.data).length === 0) {
                return (
                    <div>
                        <h2 className={"sub-header"}>i'm sorry</h2>
                        <h1 className={"header"}>i couldn't find anything that suites your partner</h1>
                        <h2 className={"sub-header"}>go to a restaurant</h2>
                        <h2
                            className={"sub-header"}
                            style={{fontSize: "30px"}}
                        >♥ 🥙 ♥</h2>
                    </div>
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

}

export default GetResultsPage