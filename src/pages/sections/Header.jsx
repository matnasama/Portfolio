import { Link } from '../../components/Link'
import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import './Header.css'

export default function Header () {
  return (
    <>
        <div className="header">
            <div className="navbar">

                <Box sx={{ fontFamily: 'Roboto Condensed', fontWeight: 800 }}>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={3}
                  >
                    <HomeIcon className='icon-home' fontSize="medium" sx={{color:"#fff", marginRight:0, paddingLeft:4}}><Link to='/'></Link></HomeIcon>
                    <Link to='/about'>play</Link>
                    <Link to='/tramites'>inventory</Link>
                    <Link to='/'>watch</Link>
                    <Link to='/about'>awards</Link>
                    <Link to='/about'>options</Link>
                    <PowerSettingsNewIcon className='icon-end' fontSize="medium" sx={{color:"#fff", marginLeft:0, paddingRight:4}}><Link to='/'></Link></PowerSettingsNewIcon>
                  </Stack>

                </Box>
            </div>
        </div>
    </>
  )
}
