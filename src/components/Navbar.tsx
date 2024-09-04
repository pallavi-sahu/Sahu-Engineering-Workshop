import React, { useState } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

type menuItem = {
    id:number,
    name:string,
    link:string
}
const menuItems: menuItem[] = [
    {
        id:1,
        name:"Home",
        link:""
    },
    {
        id:1,
        name:"About Us",
        link:""
    },
    {
        id:1,
        name:"Contact",
        link:""
    }
]
const Navbar = () => {
    const [isOpenAccordian, setIsOpenAccordian] = useState<Boolean>(false);
    const handleAccordian = () => {
        setIsOpenAccordian(!isOpenAccordian)
    }
    return (
        <>
            <div className='flex justify-between items-center p-2 border-b border-bgrey shadow-inner'>
                <div>
                    <p className='text-2xl text-primary-orange font-bold pl-5'>
                        <span className='text-primary-blue'>SAHU</span> Welding and Engineering Workshop
                    </p>
                </div>
                <div className='hidden md:flex gap-10 pr-10'>
                    <p className='text-primary-blue'>Home</p>
                    <p className='text-primary-blue'>About Us</p>
                    <p className='text-primary-blue'>Contact</p>
                </div>
                <div className='md:hidden cursor-pointer' onClick={handleAccordian}>
                    <DensityMediumIcon />
                </div>
            </div>
            {
                isOpenAccordian &&
                <>
                    {/* <div className='md:hidden'>
                        <Typography variant='body2'>Home</Typography>
                        <Typography variant='body2'>About Us</Typography>
                        <Typography variant='body2'>Contact</Typography>
                    </div> */}
                    {
                        menuItems.map((item:menuItem)=>{
                            <Accordion>
                        <AccordionSummary id="panel-header" aria-controls="panel-content">
                            {
                                item.name
                            }
                        </AccordionSummary>
                    </Accordion>
                        })
                    }
                </>
            }
        </>
    )
}

export default Navbar
