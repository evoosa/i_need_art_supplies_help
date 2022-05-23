import React, {Component} from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


export class GetResults extends Component {
    render() {
        const {back, state} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>ARE YOU READY FOR THE RESULTS ? 🤯</h1>
                <br/>
                <button className="yes-btn">Kind Off 🧐</button>

                <br/>
                <br/>
                <ArrowBackIcon
                    onClick={back}
                    fontSize="large"
                    className="next-menu"
                />
            </React.Fragment>
        );
    }
}

export default GetResults;
