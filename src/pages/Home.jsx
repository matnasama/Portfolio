import { Link } from '../components/Link'
import { useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import unmLogo from '../assets/Logo-UNM-fondo-oscuro.png';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import './pages.css'

const preventDefault = (event) => event.preventDefault();


export default function HomePage () {
  const isMobile = useMediaQuery('(max-width: 540px)');
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <div className="header" style={{ height: '80px' }}>
          <div className="navbar">
            <a className='link-logo' href="#">
              <img className='logo' src={unmLogo} alt="" />
            </a>

            {isMobile && (
              <div className="menu" style={{ marginInlineEnd: '16px' }}>
                <IconButton color="inherit" edge="end" aria-label="menu" onClick={toggleDrawer} size="large">
                  <MenuIcon fontSize="inherit" style={{ fontSize: '55px' }} />
                </IconButton>
              </div>
            )}

            {!isMobile && (
              <div className="menu">
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    padding: 0,
                    fontSize: '1.2em',
                    marginRight: '5rem',
                    '& > :not(style) ~ :not(style)': {
                      ml: 2,
                    },
                  }}
                  onClick={preventDefault}
                >
                  <Link to='/'>Inicio </Link>
                  <Link to='/about'>Acerca de</Link>
                  <Link to='/tramites'>Tramites</Link>
                </Box>
              </div>
            )}
          </div>

          {isMobile && (
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={toggleDrawer}
            >
              <Box
                sx={{
                  width: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  fontSize: '24px',
                  margin: '0 0 0 2rem',

                }}
              >
                <IconButton
                  color="#000000"
                  edge="end"
                  aria-label="close menu"
                  onClick={toggleDrawer}
                  sx={{ alignSelf: 'flex-end'}}
                  size="large"
                >
                  <CloseIcon fontSize="inherit" style={{ fontSize: '40px' }} />
                </IconButton>

                <Link to='/'>Inicio </Link>
                <Link to='/about'>Acerca de</Link>
                <Link to='/tramites'>Tramites</Link>
              </Box>
            </Drawer>
          )}
            <div className="departamentos_contenedor">
                <div className="departamentos_linea departamentos_color1"></div>
                <div className="departamentos_linea departamentos_color2"></div>
                <div className="departamentos_linea departamentos_color3"></div>
                <div className="departamentos_linea departamentos_color4"></div>
                <div className="departamentos_linea departamentos_color5"></div>
            </div>
        </div>
      <div className="banner-container">
        <div className="banner"></div>
      </div>
      <div className="info-container">
        <Typography component="div">
             <Box  className="info" sx={{ fontFamily: 'Futura Std', fontWeight: 100 }}>
                A través del siguiente espacio usted podrá informarse acerca de todos los trámites que puede realizar en el Departamento de Alumnos, incluso podrá iniciar algunas gestiones y/o descargar formularios necesarios para los trámites que así lo requieran.
                En esta plataforma usted también podrá encontrar respuestas a las preguntas frecuentes que servirán de ayuda y acompañamiento durante el desarrollo de la cursada.
                En caso de no encontrar el trámite que desea realizar o la respuesta a sus inquietudes podrá realizar su consulta a nuestros canales de contacto.
            </Box>
        </Typography>
    </div>
    </>
  )
}
