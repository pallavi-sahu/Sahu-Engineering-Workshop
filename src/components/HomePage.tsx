import { Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import welding from '../assets/images/welding.jpg'
import steel from '../assets/images/steel.jpeg'
import tractor from '../assets/images/tractor-trolley-1.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const images: object[] = [
    {
        id: 1,
        img: welding
    },
    {
        id: 2,
        img: steel
    },
    {
        id: 3,
        img: tractor
    }
]
const HomePage = () => {
    return (
        <div className='flex flex-col md:flex-row border-b-2 border-bgrey p-2 md:p-10'>
            <div className='md:w-1/2 p-4'>
                <p className='text-primary-blue text-4xl font-bold mb-2'>Transforming Metal into Masterpieces</p>
                <p className='text-primary-orange text-3xl font-bold mb-2'>From welding work to custom steel solution</p>
                <p>We specialize in high quality welding, custom steel solution and tractor solution.</p>
                <p>transforming your metalwork into reality with precision and expertise.</p>
            </div>
            <div className='md:w-1/2 p-4'>
                <Carousel
                animation='slide'
                indicators = {false}
                navButtonsAlwaysVisible = {true}
                autoPlay = {true}
                NextIcon={<ArrowForwardIosIcon/>}
                PrevIcon={<ArrowBackIosIcon/>}
                >
                    {
                        images.map((image: any, index: number) => (
                            <div key={index} className='rounded-md h-80 overflow-hidden'>
                                <img 
                                    src={image.img} 
                                    alt={`Carousel image ${index + 1}`} 
                                    className='w-full h-auto object-contain' 
                                />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default HomePage
