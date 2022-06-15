import React, {Component} from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export class Approve extends Component {
    render() {
        const {back, continues} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>ARE YOU READY FOR THE RESULTS ? 🤯</h1>
                <br/>
                <button
                    className="get-results-button"
                    onClick={continues}
                >Kind Of 🧐
                </button>

                <br/>
                <br/>
                <ArrowBackIcon
                    onClick={back}
                    fontSize="large"
                    className="arrow"
                />
            </React.Fragment>
        );
    }
}

export default Approve;
