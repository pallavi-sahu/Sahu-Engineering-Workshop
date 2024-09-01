import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='md:flex flex-row justify-between items-center p-10'>
        <p className='flex justify-center items-center'><MailOutlineIcon/> madanlalsahu40@gmail.com</p>
        <p className='flex justify-center items-center'><WifiCalling3Icon/>+91-7999691268</p>
        <p className='flex justify-center items-center'><WhatsAppIcon/>+91-9752884994</p>
        <p className='flex justify-center items-center'><HomeIcon/>Ranitarai (Road)</p>
    </div>
  )
}

export default Footer
