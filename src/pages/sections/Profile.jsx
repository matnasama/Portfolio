import AlignItemsList from './Friends'
import ImageAvatars from './Avatar'
import Skills from './Skills'
import { Typography } from '@mui/material'
import StandardImageList from './Info'
import { sitios } from '../../data/data.json'

import './Profile.css'

export default function Profile () {
    return (
        <div className="profile">
            <div className="about">
                <div className="about-profile">
                    <div className="about-profile-avatar">
                        <ImageAvatars/>
                    </div>
                    <div className="about-profile-info">
                        <div className="about-profile-info-title">
                            <Typography variant="h6" component="h6" sx={{ color: '#fff', fontFamily:'Roboto Condensed'}}>
                            Matias Samaniego
                            </Typography>
                        </div>
                        <div className="about-profile-info-skills">
                            <Skills />
                        </div>
                    </div>
                </div>
                <div className="about-friends">
                    <AlignItemsList sitios={sitios}/>
                </div>
            </div>

            <div className="info">
                <div className="info-profile">
                        <div className="about-profile-info-title">
                            <Typography variant="h6" component="h6" sx={{ color: '#fff', fontFamily:'Roboto Condensed'}}>
                                ABOUT ME
                            </Typography>
                        </div>
                        <div className="about-profile-info">
                            <Typography>
                            Soy un programador Jr en busca de su primer trabajo. Programo y aprendo todos los días, siempre busco mejorar como persona y como profesional.  Me encanta crear y solucionar todo lo que imagine
                            </Typography>
                        </div>
                </div>
                <div className="info-friends">
                    <StandardImageList />
                </div>
            </div>

        </div>
    )
}