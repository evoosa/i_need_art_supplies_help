import React from 'react';

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
            body: JSON.stringify(state)
        };
        fetch('http://localhost:6969/get_recommended_art_supplies', requestOptions)
            // fetch('http://3.70.74.186:6969/get_recommended_art_supplies', requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data : responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
            // .then(response => console.log(response.json()))
            // .then((responseJson) => {
            //     this.setState({data: responseJson})
            // })
            // .catch((error) => {
            //     console.error(error);
            // });
    }

    render() {
        if (this.state.data === null) {
            return (
                <h1 className={"header"}>K Wait a sec..</h1>
            )
        } else {
            console.log(JSON.stringify(this.state.data))
            return (
                <h1 className={"header"}>{JSON.stringify(this.state.data)}</h1>
            )
        }
    }

}

export default GetResults