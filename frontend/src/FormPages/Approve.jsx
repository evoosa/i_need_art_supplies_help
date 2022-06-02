import React, {Component} from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export class Approve extends Component {
    render() {
        const {back, continues, state} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>ARE YOU READY FOR THE RESULTS ? 🤯</h1>
                <br/>
                <button
                    className="yes-btn"
                    onClick={continues}
                >Kind Off 🧐
                </button>

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

export default Approve;
