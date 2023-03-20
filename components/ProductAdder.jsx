
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Link from 'next/link';



import { Button } from '@mui/material';


const clickEvent = () => {

}

export default function ProductAdder() {
    return (
    <Link href="/product">
    <Button
        id="basic-button"

        aria-haspopup="true"
        onClick={clickEvent}
        color="inherit"

    >
        <ControlPointIcon />
    </Button>
    </Link>)
}