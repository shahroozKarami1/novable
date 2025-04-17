import { TeamMemberCardProps } from '@/types/interfaces'
import { Box, IconButton, Typography } from '@mui/material'
import React, { FC } from 'react'
import { CusTeamMemberCard, CusTeamMemberCardOverLay, OverLaySocialMediaWrapper } from '@/elements/ElementsCustom'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const OverLaySocialMedai: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <IconButton sx={{
            backgroundColor: "var(--white-color)",
            borderRadius: "50%",
            "& svg": {
                color: "var(--dark-color)",
                fontSize: "1.2rem"
            }
        }} >
            {
                children
            }
        </IconButton>
    )
}
const TeamMemberCard: FC<TeamMemberCardProps> = ({ cardOverLay, cover }) => {
    return (
        <CusTeamMemberCard>
            <Box sx={
                {
                    width: "100%",
                    height: '100%'
                }
            }>
                <img src={cover} alt="" style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    objectPosition: "center"
                }} />
                {/* This  is  my OverLay Section */}
                <CusTeamMemberCardOverLay className='overlay'>
                    <Typography sx={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                    }}>{cardOverLay.name}</Typography>
                    <Typography sx={{
                        fontSize: "0.90rem",
                        mt: "0.25rem"
                    }}>{cardOverLay.jobPosition}</Typography>
                    <Typography sx={{
                        lineHeight: 2,
                        textAlign: 'center',
                        fontSize: "0.90rem",
                        mt: '1.5rem'
                    }}>{cardOverLay.disc}</Typography>
                    <OverLaySocialMediaWrapper sx={{
                        mt: "1rem",
                        gap: 2,
                        pt: "1rem"
                    }}>
                    <OverLaySocialMedai><InstagramIcon /></OverLaySocialMedai>
                    <OverLaySocialMedai><PinterestIcon /></OverLaySocialMedai>
                    <OverLaySocialMedai><TelegramIcon /></OverLaySocialMedai>
                    <OverLaySocialMedai><LinkedInIcon /></OverLaySocialMedai>
                </OverLaySocialMediaWrapper>
            </CusTeamMemberCardOverLay>
        </Box>
        </CusTeamMemberCard >
    )
}

export default TeamMemberCard