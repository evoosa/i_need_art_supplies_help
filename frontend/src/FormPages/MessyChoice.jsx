import React, {Component} from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


export class MessyChoice extends Component {
    render() {
        const {handleChoice, back, continues, state, sx_override} = this.props
        return (
            <React.Fragment>
                <h1 className={"header"}>Is she ok with getting messy, or does she prefer cleanliness?</h1>
                <h2 className={"sub-header"}>So I'll avoid recommending materials that might get her messy 😜</h2>
                <br/>
                <RadioGroup
                    sx={sx_override}
                    className="choice-radio-group"
                    value={state["messy"]}
                    name="messy"
                    onChange={handleChoice}
                >
                    <FormControlLabel
                        value="0"
                        control={<Radio/>}
                        sx={{
                            color: "brown"
                        }}
                        label="She's OK with getting messy 💩"/>
                    <FormControlLabel
                        value="1"
                        control={<Radio/>}
                        label="She prefers cleanliness"/>
                </RadioGroup>
                <br/>
                <br/>
                <ArrowBackIcon
                    onClick={back}
                    fontSize="large"
                    className="next-menu"
                />
                <ArrowForwardIcon
                    onClick={continues}
                    fontSize='large'
                    className='next-menu'
                />
            </React.Fragment>
        );
    }
}

export default MessyChoice;
