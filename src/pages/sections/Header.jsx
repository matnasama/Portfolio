import { Link } from '../../components/Link'
import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import './Header.css'

export default function Header () {
  return (
    <>
        <div className="header">
            <div className="navbar">
                <HomeIcon className='icon-home' fontSize="medium" sx={{color:"#fff"}}><Link to='/'></Link></HomeIcon>
                <Box>
                    <Link to='/about'>Acerca de</Link>
                    <Link to='/tramites'>Tramites</Link>
                    <Link to='/'>Inicio </Link>
                    <Link to='/about'>Acerca de</Link>
                </Box>
                <PowerSettingsNewIcon className='icon-end' fontSize="medium" sx={{color:"#fff"}}><Link to='/'></Link></PowerSettingsNewIcon>
            </div>
        </div>
    </>
  )
}
