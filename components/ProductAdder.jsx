
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const webhook = require("webhook-discord")



import { Button } from '@mui/material';


const clickEvent = () => {


}

export default function ProductAdder() {
    return (<Button
        id="basic-button"

        aria-haspopup="true"
        onClick={clickEvent}
        color="inherit"

    >
        <ControlPointIcon />
    </Button>)
}