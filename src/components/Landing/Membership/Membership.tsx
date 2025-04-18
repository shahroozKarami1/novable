import { CusInputAdornmentMemberShip, CusTextFeildMemeberShipEmail, MemberShipWrapper } from '@/elements/ElementsCustom'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopSection from '../HeroHeader/TopSection'
import TelegramIcon from '@mui/icons-material/Telegram';
import MemberShipForm from './MemberShipForm';

const Membership = () => {
    return (
        <MemberShipWrapper>
            <Container>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <TopSection mainTite='عضویت در خبرنامه'
                        subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' />
                    <Grid size={{ md: 5 }}>
                        <Box my={"2rem"}>
                            <CusTextFeildMemeberShipEmail
                                placeholder='آدرس ایمیل...'
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <CusInputAdornmentMemberShip position="start" >
                                                <TelegramIcon sx={{
                                                    color: "var(--white-color)",
                                                    margin: "0 auto"
                                                }} />
                                            </CusInputAdornmentMemberShip>
                                        ),
                                    },
                                }}
                                variant="standard"
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ md: 12 }}>
                        <Box>
                            <MemberShipForm />

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </MemberShipWrapper>
    )
}

export default Membership
