import React from 'react'
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';

const carousel = [

]
const Navbar = () => {
    return (
        <div>
            <div>
            <Typography variant="h5">
                SAHU Welding and Engineering Workshop
            </Typography>
            </div>
            <div>
                <Typography variant='body2'>Home</Typography>
                <Typography variant='body2'>About Us</Typography>
                <Typography variant='body2'>Contact</Typography>
            </div>
            <div>
                {/* <Accordion children={'About Us'}/> */}
            </div>

        </div>
    )
}

export default Navbar
