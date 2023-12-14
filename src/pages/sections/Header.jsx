import { Link } from '../../components/Link'
import * as React from 'react';
import Box from '@mui/material/Box';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import './Header.css'

export default function Header () {
  return (
    <>
        <div className="header">
            <div className="navbar">
                <Box>
                    <Link to='/' src={HomeOutlinedIcon}></Link> 
                    <Link to='/about'>Acerca de</Link>
                    <Link to='/tramites'>Tramites</Link>
                    <Link to='/'>Inicio </Link>
                    <Link to='/about'>Acerca de</Link>
                    <Link to='/'></Link>
                </Box>
            </div>
        </div>
    </>
  )
}
