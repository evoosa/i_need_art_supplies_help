import React from 'react';
import {View} from 'react-native';

export default class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentWillMount() {
        this.GetResultsFromServer(state);
    }

    GetResultsFromServer(state) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state)
        };
        fetch('http://localhost:6969/get_recommended_art_supplies', requestOptions)
            // fetch('http://3.70.74.186:6969/get_recommended_art_supplies', requestOptions)
            .then(response => console.log(response.json()))
            .then((responseJson) => {
                this.setState({data: responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View>
                {/*{this.state.data ? <MyComponent data={this.state.data}/> : <MyLoadingComponnents/>}*/}
                <div>
                    {this.state.data}
                </div>
            </View>
        );
    }
}
