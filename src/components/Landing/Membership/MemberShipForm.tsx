import { Box, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { CusRightSideForm, MemberShipFormWrapper } from '@/elements/ElementsCustom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

import MemberShipFormValidation from './MemberShipFormValidation';
export const RightSideContent: FC<{ title: string, disc: string, isIcon: boolean, icon?: React.ReactNode }> = ({ disc, title, isIcon, icon }) => {
    return (
        <Box display={"flex"} alignItems={"center"} mb={"1.5rem"} gap={1}>

            <Box>
                {isIcon && (<Typography sx={{
                    fontSize: '1.3rem',
                }} > {icon}</Typography>)}
            </Box>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={1}>


                <Typography sx={{
                    fontSize: "1.2rem",
                    fontWeight: 'bold'
                }}>{title}</Typography>
                <Typography lineHeight={2} fontSize={"0.90rem"} sx={{
                    textAlign: 'start'
                }}>{disc}</Typography>
            </Box>
        </Box>
    )
}
const MemberShipForm = () => {

    return (
        <MemberShipFormWrapper sx={{
            minHeight: {
                md: "500px",
                xs: "100%"
            }
        }} >
            <Grid container sx={{
                height: '100%',

            }}>
                <Grid size={{ md: 6, xs: 12 }}>
                    <CusRightSideForm>

                        <RightSideContent disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی' isIcon={false} title='آدرس' />
                        <RightSideContent disc='09305151712' isIcon={true} icon={<PhoneEnabledOutlinedIcon />} title='با ما تماس بگیرید' />
                        <RightSideContent disc='shahrooz.programmer@gmail.com' isIcon={true} icon={<AlternateEmailOutlinedIcon />} title='ایمیل ما' />
                        <RightSideContent disc='تبریز، فلکه دانشگاه، برج بلور، طبقه 456' isIcon={true} icon={<LocationOnOutlinedIcon />} title="مکان" />
                    </CusRightSideForm>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Box sx={{
                        padding: '3rem',
                        height: "100%"
                    }}>
                        <MemberShipFormValidation />
                    </Box>
                </Grid>
            </Grid>

        </MemberShipFormWrapper>
    )
}

export default MemberShipForm
