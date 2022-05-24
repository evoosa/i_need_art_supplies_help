import React from 'react';

function GetResultsFromServer(state) {
    // console.log(state)
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(state)
    };
    // console.log(JSON.stringify(state))
    // fetch('http://localhost:6969/get_recommended_art_supplies', requestOptions)
    fetch('http://3.70.74.186:6969/get_recommended_art_supplies', requestOptions)
        .then(response => console.log(response.json()))
    // .then(response => response.json())
    // .then(data => this.setState({ postId: data.id }));
}

export default GetResultsFromServer;