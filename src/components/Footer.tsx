import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='grid grid-cols-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center p-10'>
        <p className='flex justify-center items-center gap-2'><MailOutlineIcon/> madanlalsahu40@gmail.com</p>
        <p className='flex justify-center items-center gap-2'><WifiCalling3Icon/>+91-7999691268</p>
        <p className='flex justify-center items-center gap-2'><WhatsAppIcon/>+91-9752884994</p>
        <p className='flex justify-center items-center gap-2'><HomeIcon/>Ranitarai (Road), District-Balod (C.G)</p>
    </div>
  )
}

export default Footer
