import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


const Navbar = () => {

    const [isOpenAccordian, setIsOpenAccordian] = useState<Boolean>(false);
    const handleAccordian = () => {
        setIsOpenAccordian(!isOpenAccordian)
    }
    return (
       <>
        <div className='flex justify-between items-center p-2 border-b border-bgrey shadow-inner'>
            <div>
                <p className='text-2xl text-primary-orange font-bold'>
                    <span className='text-primary-blue'>SAHU</span> Welding and Engineering Workshop
                </p>
            </div>
            <div className='hidden md:flex gap-10'>
                <Typography variant='body2'>Home</Typography>
                <Typography variant='body2'>About Us</Typography>
                <Typography variant='body2'>Contact</Typography>
            </div>
            <div className='md:hidden cursor-pointer' onClick={handleAccordian}>
                <DensityMediumIcon/>
            </div>
            </div>
            {
                isOpenAccordian &&
                <>
                    <div className='md:hidden'>
                        <Typography variant='body2'>Home</Typography>
                        <Typography variant='body2'>About Us</Typography>
                        <Typography variant='body2'>Contact</Typography>
                    </div>
                </>
            }
       </>

        
    )
}

export default Navbar
