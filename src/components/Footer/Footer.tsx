import { Box, IconButton, Typography } from '@mui/material'
import { CusInnerContainerFooter, FooterWrapper } from '@/elements/ElementsCustom'
import { Container, Grid } from '@mui/material'
import React, { FC } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
export const FooterIcons: FC<{ icon: React.ReactNode }> = ({ icon }) => {
    return (
        <Box>
            <IconButton sx={{
                border: "1px solid var(--white-color)",
                borderRadius: "50%",
                "& path": {
                    color: "var(--white-color)",
                    fontSize: "2rem",
                },
                "&:hover": {
                    backgroundColor: "var(--white-color)",
                    "& path": {
                        color: "var(--black-color)"
                    }
                }
            }}>
                {icon}
            </IconButton>
        </Box>
    )
}

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <Grid size={{ md: 5 }}>
                        <CusInnerContainerFooter>
                            <Box>
                                <img src="/image/landingPage/LogoNavBar.png" alt="" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "1rem"
                            }}>
                                <FooterIcons icon={<InstagramIcon />} />
                                <FooterIcons icon={<InstagramIcon />} />
                                <FooterIcons icon={<InstagramIcon />} />
                                <FooterIcons icon={<InstagramIcon />} />
                            </Box>
                            <Typography sx={{
                                fontSize: "1rem",
                                color: "var(--white-color)"
                            }}>ارایه شده توسط  شهروز  کرمی</Typography>
                        </CusInnerContainerFooter>
                    </Grid>

                </Grid>
            </Container>
        </FooterWrapper>
    )
}

export default Footer
