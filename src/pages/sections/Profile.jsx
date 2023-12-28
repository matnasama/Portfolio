import AlignItemsList from './Friends'
import ImageAvatars from './Avatar'
import Skills from './Skills'
import { Typography } from '@mui/material'
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
                    <AlignItemsList />
                </div>
            </div>
            <div className="info">

            </div>
        </div>
    )
}